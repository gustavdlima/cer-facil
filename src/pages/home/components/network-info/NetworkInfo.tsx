import WhatIsRCPD from "./section/WhatIsRCPD";
import TypesOfCersAndDeficiencies from "./section/TypesOfCersAndDeficiencies";
import ProfessionalsRoles from "./section/ProfessionalsRoles";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";
import CersCards from "./section/CersCards";

interface NetworkInfoProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function NetworkInfo({
  showFlow,
  setShowFlow,
}: NetworkInfoProps) {
  return (
  <div id="network-info">  
  {/* 1. Azul - Tecnologia e Informação */}
  <div className="bg-[#3B82F6] text-white py-16 px-8">
    <WhatIsRCPD />
  </div>

  {/* 2. Laranja - Atenção e Ação */}
  <div className="bg-[#F97316] text-white py-16 px-8">
    <AttentionLevel />
  </div>

  {/* 3. Verde - Inclusão e Cuidado */}
  <div className="bg-[#10B981] text-white py-16 px-8">
    <TypesOfCersAndDeficiencies />
  </div>

  {/* 4. Azul - Cards da Rede (Repete a sequência) */}
  <div className="bg-[#3B82F6] text-white py-16 px-8 shadow-inner">
    <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
  </div>

  {/* 5. Laranja - Linha do Tempo (Destaque Histórico) */}
  <div className="bg-[#F97316] text-white py-16 px-8">
    <HistoryTimeline />
  </div>

  {/* 6. Verde - Papéis Profissionais (Encerramento) */}
  <div className="bg-[#10B981] text-white py-16 px-8 border-t border-white/20">
    <ProfessionalsRoles />
  </div>
  </div>
  

  );
}
