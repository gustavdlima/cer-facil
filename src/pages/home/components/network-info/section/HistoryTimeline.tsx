import { Circle, Calendar } from "lucide-react";
import timelineData from "@/data/timeline-history.json";
import { useState } from "react";

const detailedMessages = [
  "A Rede de Apoio à Pessoa com Deficiência foi estruturada no Brasil a partir da necessidade de superar um modelo de cuidado fragmentado, no qual os atendimentos eram pontuais e pouco articulados entre si.",
  "Em 2012, no âmbito do Sistema Único de Saúde (SUS), a Rede de Cuidado à Pessoa com Deficiência (RCPD) foi oficialmente instituída como parte da Rede de Atenção à Saúde (RAS), integrada ao Plano Nacional dos Direitos da Pessoa com Deficiência — o Viver sem Limite.",
  "Desde então, a rede vem sendo ampliada e aprimorada, incorporando novos serviços, fortalecendo a atenção básica, os centros especializados de reabilitação e a articulação com outras políticas públicas.",
  "Essa evolução reflete uma mudança de perspectiva: do cuidado centrado apenas na deficiência para um cuidado centrado na pessoa e em seus direitos.",
  "Hoje, a rede segue em constante construção, adaptando-se às demandas sociais, territoriais e às diferentes realidades das pessoas com deficiência no país.",
];

/* Cores dos círculos usando o Azul Marinho do manual para contraste no laranja */
const circleColors = [
  "bg-[#0a2d5e]",
  "bg-[#0a2d5e]",
  "bg-[#0a2d5e]",
  "bg-[#0a2d5e]",
  "bg-[#0a2d5e]",
];

export default function HistoryTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="history-rcpd"
      /* Removido o gradiente original para respeitar o fundo da seção pai */
      className="px-6 py-20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          {/* Título em Branco para contraste no fundo laranja */}
          <h2 className="text-4xl font-bold mb-4 text-white">
            História da Rede de Cuidado à Pessoa com Deficiência
          </h2>
          {/* Barra em Azul Marinho (institucional do manual) */}
          <div className="w-24 h-2 bg-[#0a2d5e] rounded-full"></div>
          {/* Texto de apoio em Branco com leve opacidade */}
          <p className="text-white/90 mt-4 max-w-2xl">
            Uma jornada de evolução e compromisso com os direitos das pessoas
            com deficiência
          </p>
        </div>

        <div className="relative">
          {/* Linha vertical em Branco para visibilidade no fundo laranja */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/40" />

          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex items-center mb-10">
              {/* Mobile Layout */}
              <div className="md:hidden flex items-start gap-4 w-full">
                <div className="relative flex-shrink-0">
                  <div
                    className={`flex items-center justify-center w-14 h-14 ${circleColors[index]} rounded-full border-4 border-white shadow-lg z-10`}
                  >
                    <Circle
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    /* Card branco com borda e hover em Azul Marinho */
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#0a2d5e] transition-all cursor-pointer hover:shadow-xl group"
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-[#0a2d5e]" />
                      <h3 className="text-xl font-bold text-[#0a2d5e]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">
                      {item.description}
                    </p>
                    {expandedId === item.id && (
                      <p className="text-gray-600 text-sm mt-4 leading-relaxed border-t pt-4 animate-in fade-in duration-300">
                        {detailedMessages[index]}
                      </p>
                    )}
                    {/* Texto "Saiba mais" em Laranja para destaque dentro do card */}
                    <span className="text-xs text-[#F97316] font-bold mt-2 block group-hover:underline hover:scale-105 transition-transform inline-block">
                      {expandedId === item.id ? "Ver menos" : "Saiba mais"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div
                className={`hidden md:flex items-center w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {index % 2 === 0 && (
                  <>
                    <div className="w-5/12 pr-8">
                      <div
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#0a2d5e] transition-all cursor-pointer hover:shadow-xl group"
                        onClick={() =>
                          setExpandedId(expandedId === item.id ? null : item.id)
                        }
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-[#0a2d5e]" />
                          <h3 className="text-xl font-bold text-[#0a2d5e]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">
                          {item.description}
                        </p>
                        {expandedId === item.id && (
                          <p className="text-gray-600 text-sm mt-4 leading-relaxed border-t pt-4 animate-in fade-in duration-300">
                            {detailedMessages[index]}
                          </p>
                        )}
                        <span className="text-xs text-[#F97316] font-bold mt-2 block group-hover:underline hover:scale-105 transition-transform inline-block">
                          {expandedId === item.id ? "Ver menos" : "Saiba mais"}
                        </span>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`flex items-center justify-center w-14 h-14 ${circleColors[index]} rounded-full border-4 border-white shadow-lg z-10 hover:scale-110 transition-transform`}
                      >
                        <Circle
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    <div className="w-5/12"></div>
                  </>
                )}

                {index % 2 === 1 && (
                  <>
                    <div className="w-5/12"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`flex items-center justify-center w-14 h-14 ${circleColors[index]} rounded-full border-4 border-white shadow-lg z-10 hover:scale-110 transition-transform`}
                      >
                        <Circle
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    <div className="w-5/12 pl-8">
                      <div
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#0a2d5e] transition-all cursor-pointer hover:shadow-xl group"
                        onClick={() =>
                          setExpandedId(expandedId === item.id ? null : item.id)
                        }
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-[#0a2d5e]" />
                          <h3 className="text-xl font-bold text-[#0a2d5e]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">
                          {item.description}
                        </p>
                        {expandedId === item.id && (
                          <p className="text-gray-600 text-sm mt-4 leading-relaxed border-t pt-4 animate-in fade-in duration-300">
                            {detailedMessages[index]}
                          </p>
                        )}
                        <span className="text-xs text-[#F97316] font-bold mt-2 block group-hover:underline hover:scale-105 transition-transform inline-block">
                          {expandedId === item.id ? "Ver menos" : "Saiba mais"}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}