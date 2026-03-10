import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../../user-flow/Flow";
import { MapPin, ArrowRight, Filter, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SimpleMap from "@/components/pb-map/SimpleMap";
import MapCaptions from "@/components/pb-map/MapCaptions";

interface DadosCers {
  id: number;
  nome: string;
  especialidades: string[];
  cidade: string;
}

interface CersCardsProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export function toTitleCase(text: string): string {
  if (!text) return "";

  const conectores = ["de", "da", "do", "dos", "das", "e", "ao", "aos", "para", "com"];

  return text.split(" - ").map((parte) => {
    const palavras = parte.trim().split(" ");

    if (palavras.length <= 2 && parte.length <= 8) {
      return parte.toUpperCase();
    }

    return palavras
      .map((word, index) => {
        const lowerWord = word.toLowerCase();
        if (conectores.includes(lowerWord) && index !== 0) {
          return lowerWord;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }).join(" - ");
}

const FILTER_OPTIONS = ["Física", "Auditiva", "Visual", "Intelectual"] as const;

type FilterOption = (typeof FILTER_OPTIONS)[number];

const normalizeText = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const getFilterFromSpecialty = (specialty: string): FilterOption | null => {
  const normalized = normalizeText(specialty);

  if (normalized.includes("audit")) return "Auditiva";
  if (normalized.includes("visual")) return "Visual";
  if (normalized.includes("intelect")) return "Intelectual";
  if (/f.*sica/.test(normalized) || normalized.includes("fisica")) {
    return FILTER_OPTIONS[0];
  }

  return null;
};

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const [activeFilters, setActiveFilters] = useState<FilterOption[]>([]);

  const handleScrollToSection = () => {
    const section = document.getElementById("flow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showFlow[0] && showFlow[1] !== null) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const toggleFilter = (filter: FilterOption) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const filteredCers = useMemo(() => {
    const allCers = CERS as DadosCers[];
    if (activeFilters.length === 0) return allCers;

    return allCers.filter((cer) =>
      cer.especialidades.some((especialidade) => {
        const mappedFilter = getFilterFromSpecialty(especialidade);
        return mappedFilter ? activeFilters.includes(mappedFilter) : false;
      })
    );
  }, [activeFilters]);

  const fixos = filteredCers.slice(0, 6);
  const restantes = filteredCers.slice(6);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div
        key={cer.id}
        className="p-6 rounded-3xl shadow-xl bg-white flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1 h-full border border-slate-100 min-h-[240px]"
      >
        <div className="flex-grow flex flex-col">
          <h3 className="font-bold text-xl text-slate-900 mb-4 leading-tight">
            {toTitleCase(cer.nome)}
          </h3>

          <div className="flex items-center text-slate-500 mb-6 mt-auto font-medium">
            <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 text-[var(--cor-bg-1)]" />
            <span className="text-sm">{cer.cidade}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-5 mt-auto">
          <div className="flex flex-wrap gap-1.5 flex-1 pr-2">
            {cer.especialidades.map((especialidade, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-slate-100 text-[var(--cor-bg-1)] rounded-full text-[10px] font-black uppercase tracking-wider border border-slate-200"
              >
                {especialidade}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-[var(--cor-bg-1)] hover:scale-110 rounded-full transition-all duration-300 flex-shrink-0 h-10 w-10 shadow-md hover:bg-[var(--cor-bg-1)]"
            onClick={() => {
              setShowFlow([true, cer.id]);
              setTimeout(handleScrollToSection, 100);
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="cers-card" className="min-h-screen py-24 px-6 md:px-8 flex items-center bg-[var(--cor-bg-1)]">
      <div className="mx-auto max-w-7xl w-full">
        <div className="text-left mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white tracking-tight">
            Rede Estadual de Reabilitação
          </h2>
          <div className="w-32 h-2 bg-white rounded-full"></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
          <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold uppercase text-sm tracking-wider">
            <Filter size={18} />
            <span>Filtrar por deficiência:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilters.includes(option);
              return (
                <button
                  key={option}
                  onClick={() => toggleFilter(option)}
                  className={`
                    px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 border-2
                    ${
                      isActive
                        ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)] text-white shadow-md shadow-blue-100"
                        : "bg-white border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] hover:border-[var(--cor-bg-1)] hover:text-[var(--cor-bg-1)]"
                    }
                  `}
                >
                  {option}
                  {isActive && <X size={14} className="inline ml-2 mb-0.5" />}
                </button>
              );
            })}

            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="ml-2 text-slate-500 hover:text-red-500 text-sm font-medium transition-colors"
              >
                Limpar tudo
              </button>
            )}
          </div>
        </div>

        {filteredCers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fixos.map((cer) => renderCersRow(cer))}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-300 bg-white/10 rounded-xl border-2 border-dashed border-white/40 shadow-sm">
            Nenhuma unidade encontrada para essa combinação de filtros.
          </div>
        )}

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="flex gap-3 items-center text-white px-10 py-4 font-bold transition-all border-2 border-white/40 rounded-full hover:bg-white hover:text-[var(--cor-bg-1)] data-[state=open]:hidden shadow-xl">
                  Ver todas as unidades
                </AccordionTrigger>
              </div>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}
