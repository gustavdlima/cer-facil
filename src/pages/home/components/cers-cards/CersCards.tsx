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
  cidade: string;
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
        className="relative bg-white p-6 rounded-2xl shadow-xl border border-blue-50 flex flex-row items-center transition-all hover:shadow-2xl hover:-translate-y-1 gap-4 w-full min-h-[220px]"
      >
        {/* LADO DO ÍCONE (SVG) */}
        <div className="flex-shrink-0">
          <svg
            className="h-12 w-12 md:h-14 md:w-14 text-[var(--cor-3)]"
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
        <div className="flex flex-col space-y-3 text-left items-start w-full pr-6">
          <h3 className="text-sm font-extrabold text-gray-900 leading-tight line-clamp-2 uppercase">
            {toTitleCase(cer.nome)}
          </h3>
          
          <div className="border-l-4 pl-3 border-[var(--cor-5)] space-y-2">
            <div>
              <p className="text-[10px] font-bold text-[var(--cor-5)] uppercase tracking-widest">
                Especialidades
              </p>
              <p className="text-[11px] text-gray-600 line-clamp-2 leading-tight">
                {cer.especialidades.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[var(--cor-5)] uppercase tracking-widest">
                Cidade
              </p>
              <p className="text-[11px] text-gray-600">
                {cer.cidade}
              </p>
            </div>
          </div>
        </div>

        {/* BOTÃO COM SETA */}
        <Button
          variant="ghost"
          className="absolute bottom-3 right-2 p-2 h-auto bg-transparent hover:bg-gray-50 transition-all opacity-100"
          onClick={() => setShowFlow([true, cer.id])}
        >
          <img 
            src="https://www.svgrepo.com/show/425982/right-arrow.svg" 
            alt="Seta" 
            className="w-5 h-5 block" 
            style={{ filter: 'grayscale(100%)' }}
          />
        </Button>
      </div>
    );
  };

  return (
    <section id="cers-card" className="py-20 overflow-hidden bg-[var(--cor-5)] w-screen relative left-[calc(-50vw+50%)]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* TÍTULO COM LINHA CONTÍNUA CORRIGIDA */}
        <div className="flex items-center w-full mb-16 gap-6">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase whitespace-nowrap shrink-0">
            Rede Estadual de Reabilitação
          </h2>
          {/* A div abaixo ocupa o espaço restante e tem altura de 2px */}
          <div className="flex-1 h-[3px] bg-[var(--cor-4)]"></div>
        </div>

        {/* GRID DE QUATRO COLUNAS - LISTA FIXA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

        {/* Accordion para unidades extras */}
        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="flex gap-3 items-center bg-transparent text-white px-12 py-4 font-bold transition-all">
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