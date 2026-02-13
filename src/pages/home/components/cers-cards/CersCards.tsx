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

  // Separando os dados: 4 primeiros fixos, o resto no accordion
  const fixos = (CERS as DadosCers[]).slice(0, 4);
  const restantes = (CERS as DadosCers[]).slice(4);

  // Função auxiliar para não repetir código do Card
  const renderCard = (cer: DadosCers) => (
    <Card
      key={cer.id}
      id={`${cer.id}`}
      style={{ backgroundColor: `var(--cor-1)` }}
      className="relative w-full max-w-[350px] text-white shadow-md"
    >
      <div className="flex items-center justify-center w-full">
        <svg
          className="h-20 w-20 pt-5"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g id="SVGRepo_iconCarrier">
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
          </g>
        </svg>
      </div>

      <CardHeader>
        <CardTitle className="mt-6 text-lg text-left h-20 leading-tight font-normal">
          {toTitleCase(cer.nome)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-lg h-20">
          <p className="leading-snug">
            <span className="opacity-90 text-normal">Especialidades:</span>{" "}
            <span className="font-regular">{cer.especialidades.join(", ")}</span>
          </p>
        </div>
      </CardContent>
      <div className="flex justify-end">
            <Button
              className="absolute bottom-5 right-5 bg-[var(--cor-3)] hover:!bg-[var(--cor-3)] cursor-pointer border border-white/20 transition-colors shadow-md"
              onClick={() => setShowFlow([true, cer.id])}
            >
              Detalhes
            </Button>
          </div>
    </Card>
  );

  return (
    <section
      id="cers-card"
      className="py-16 bg-white w-screen relative left-[calc(-50vw+50%)] px-6"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Título da Seção */}
        <div className="flex items-center w-full mb-12">
          <div className="w-[10%] md:w-[35%] h-[2px] bg-black mr-6"></div>
          <h2 className="text-2xl md:text-3xl text bg-white whitespace-nowrap uppercase">
            REDE ESTADUAL DE REABILITAÇÃO
          </h2>
        </div>

        {/* 1. GRID DOS CARDS FIXOS (Sempre visíveis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mb-6">
          {fixos.map(renderCard)}
        </div>

        {/* 2. ACCORDION PARA OS CARDS RESTANTES */}
        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="grid-restante" className="border-none">

              <AccordionContent className="overflow-visible pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center pb-10">
                  {restantes.map(renderCard)}
                </div>
              </AccordionContent>

              {/* Botão Ver Mais / Ver Menos */}
              <div className="flex justify-center mt-4">
                <AccordionTrigger className="flex gap-2 items-center bg-[var(--cor-1)] text-white px-10 py-3 rounded-full hover:no-underline hover:opacity-90 transition-all cursor-pointer">
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