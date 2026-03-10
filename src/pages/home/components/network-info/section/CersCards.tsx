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

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const handleScrollToSection = () => {
    const section = document.getElementById("flow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showFlow[0] && showFlow[1] !== null) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const fixos = (CERS as DadosCers[]).slice(0, 6);
  const restantes = (CERS as DadosCers[]).slice(6);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

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