import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../user-flow/Flow";
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
}

interface CersCardsProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (!word) return '';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  if (showFlow[0]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const fixos = (CERS as DadosCers[]).slice(0, 4);
  const restantes = (CERS as DadosCers[]).slice(4);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div
        key={cer.id}
        className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50 flex flex-row items-center transition-all hover:shadow-2xl hover:-translate-y-1 gap-8 w-full"
      >
        {/* LADO DO ÍCONE (SVG) */}
        <div className="flex-shrink-0">
          <svg
            className="h-16 w-16 md:h-20 md:w-20 text-[var(--cor-3)]"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 11L16 4L30 11" />
            <path d="M5 11V26H27V11" />
            <path d="M3 26H29" />
            <path d="M1 29H31" />
            <path d="M9 14V23" />
            <path d="M13.5 14V23" />
            <path d="M18.5 14V23" />
            <path d="M23 14V23" />
            <path d="M5 14H27" />
            <path d="M5 23H27" />
          </svg>
        </div>

        {/* LADO DO CONTEÚDO */}
        <div className="flex flex-col space-y-4 text-left items-start w-full">
          <h3 className="text-xl font-extrabold text-gray-900 leading-tight h-14 line-clamp-2">
            {toTitleCase(cer.nome)}
          </h3>
          
          <div className="border-l-4 pl-4 border-[var(--cor-1)]">
            <p className="text-xs font-bold text-[var(--cor-1)] uppercase tracking-widest mb-1">
              Especialidades
            </p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {cer.especialidades.join(", ")}
            </p>
            <p className="text-xs font-bold text-[var(--cor-1)] uppercase tracking-widest mb-1">
              Cidade
            </p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {cer.cidade}
            </p>
          </div>

          <Button
            className="bg-[var(--cor-3)] hover:opacity-90 text-white px-6 py-4 text-sm rounded-full shadow-md transition-transform active:scale-95 w-full mt-2"
            onClick={() => setShowFlow([true, cer.id])}
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="cers-card" className="py-20 overflow-hidden bg-[var(--cor-5)] w-screen">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Título */}
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--cor-4)] uppercase whitespace-nowrap">
            Rede Estadual de Reabilitação
          </h2>
          <div className="h-[2px] w-full bg-gray-200"></div>
        </div>

        {/* GRID DE DUAS COLUNAS - LISTA FIXA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

        {/* Accordion para unidades extras */}
        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible">
                {/* GRID DE DUAS COLUNAS - RESTANTE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="flex gap-3 items-center bg-white border border-gray-200 text-gray-800 px-12 py-4 rounded-full font-bold hover:bg-[var(--cor-1)] hover:text-white transition-all shadow-sm">
                  VER TODAS AS UNIDADES
                </AccordionTrigger>
              </div>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}