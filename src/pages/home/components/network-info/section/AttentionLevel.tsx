import attentionLevels from "@/data/attention-levels.json";
import { useState } from "react";
import { Activity, Building2, Hospital, ChevronDown } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const levelIcons = [Activity, Building2, Hospital];

// Paleta de cores Quentes para harmonizar com o Laranja do fundo
const levelColors = [
  "bg-amber-400",   // Atenção Básica (Amarelo Solar)
  "bg-orange-600",  // Atenção Especializada (Laranja Intenso)
  "bg-red-800",     // Atenção Hospitalar (Vermelho Profundo/Vinho)
];

const levelBorders = [
  "border-amber-100",
  "border-orange-100",
  "border-red-100",
];

const levelHovers = [
  "hover:border-amber-400",
  "hover:border-orange-500",
  "hover:border-red-700",
];

export default function AttentionLevel() {
  const levels = attentionLevels as AttentionLevel[];
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="attention-level"
      className="px-6 py-20 relative" // Mantendo seu fundo laranja
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Níveis de Atenção
          </h2>
          {/* Linha branca para destacar no fundo escuro */}
          <div className="w-24 h-1 bg-[var(--cor-5)] rounded-full"></div>
          <p className="text-orange-50 mt-4 max-w-2xl text-lg opacity-90">
            Estrutura integrada de cuidado em diferentes níveis de complexidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, idx) => {
            const Icon = levelIcons[idx];
            return (
              <Card
                key={level.id}
                className={`flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 bg-white ${levelBorders[idx]} ${levelHovers[idx]} relative overflow-hidden group rounded-2xl`}
                onMouseEnter={() => setHoveredCard(level.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Detalhe superior acompanhando a paleta quente */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${levelColors[idx]} transition-all duration-300`}
                ></div>

                <CardHeader className="text-center pb-6 pt-12">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`${levelColors[idx]} p-5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {level.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-sm leading-relaxed px-4">
                    {level.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-6 pb-10">
                  <Accordion type="single" collapsible className="w-full">
                    {level.components.map((component) => (
                      <AccordionItem
                        key={component.id}
                        value={component.id}
                        className="border-gray-100"
                      >
                        {/* Texto do trigger mudando para um tom de laranja ao passar o mouse */}
                        <AccordionTrigger className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors py-4 no-underline hover:no-underline">
                          <span className="flex items-center gap-3">
                            <ChevronDown className={`w-4 h-4 transition-colors ${hoveredCard === level.id ? 'text-orange-500' : 'text-gray-400'}`} />
                            {component.title}
                          </span>
                        </AccordionTrigger>
                        {/* Fundo do conteúdo com um bege bem clarinho para suavizar */}
                        <AccordionContent className="text-sm text-gray-600 leading-relaxed bg-orange-50/50 p-4 rounded-xl mt-1 border border-orange-100/30 text-justify">
                          {component.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}