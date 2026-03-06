import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../../user-flow/Flow";
import { MapPin, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const romanNumerals = ["II", "III", "IV"];

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (romanNumerals.includes(word.toUpperCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const handleScrollToSection = () => {
    const section = document.getElementById("flow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showFlow[0]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const fixos = (CERS as DadosCers[]).slice(0, 6);
  const restantes = (CERS as DadosCers[]).slice(6);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div
        key={cer.id}
        className="p-6 rounded-2xl shadow-xl bg-white flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 h-full min-h-[220px]"
      >
        <div className="flex-grow flex flex-col">
          <h3 className="font-bold text-xl text-slate-900 mb-4 leading-tight">
            {toTitleCase(cer.nome)}
          </h3>

          <div className="flex items-center text-slate-500 mb-6 mt-auto font-semibold">
            <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 text-[var(--cor-bg-1)]" />
            <span className="text-sm">{cer.cidade}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          <div className="flex flex-wrap gap-2 flex-1 pr-3">
            {cer.especialidades.map((especialidade, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] rounded-lg text-[12px] font-extrabold uppercase tracking-widest"
              >
                {especialidade}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--cor-bg-1)] hover:text-white hover:bg-[var(--cor-bg-1)] rounded-full transition-all duration-300 flex-shrink-0 bg-slate-50"
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
    <section
      id="cers-card"
      className="min-h-screen py-24 px-8 relative flex align-items-center"
    >
      {" "}
      {/* Azul vibrante da imagem */}
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-16">
          <h2 className="font-bold text-4xl mb-4 text-white">
            Rede Estadual de Reabilitação
          </h2>
          <div className="w-24 h-1.5 bg-white rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="flex gap-3 items-center text-white px-8 py-4 font-bold transition-all border-2 border-white/40 rounded-full hover:bg-white hover:text-[var(--cor-bg-1)] data-[state=open]:hidden shadow-lg">
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
