import WhatIsRCPD from "./section/WhatIsRCPD";
import TypesOfCersAndDeficiencies from "./section/TypesOfCersAndDeficiencies";
import ProfessionalsRoles from "./section/ProfessionalsRoles";
import HistoryTimeline from "./section/HistoryTimeline";
import AttentionLevel from "./section/AttentionLevel";
import CersCards from "./section/CersCards";
import WaveDivider from "../../../../components/WaveDivider";

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
  <div className="bg-[#3B82F6] text-white pt-16">
    <WhatIsRCPD />
    <WaveDivider primaryColor="#3B82F6" secondaryColor="#269ebc" />
  </div>
  <div className="bg-[#269ebc] text-white pt-16">
    <AttentionLevel />
    <WaveDivider primaryColor="#269ebc" secondaryColor="#10B981" />
  </div>
  <div className="bg-[#10B981] text-white pt-16">
    <TypesOfCersAndDeficiencies />
    <WaveDivider primaryColor="#10B981" secondaryColor="#3B82F6" />
  </div>
  <div className="bg-[#3B82F6] text-white pt-16">
    <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
    <WaveDivider primaryColor="#3B82F6" secondaryColor="#269ebc" />
  </div>
  <div className="bg-[#269ebc] text-white pt-16">
    <HistoryTimeline />
    <WaveDivider primaryColor="#269ebc" secondaryColor="#10B981" />
  </div>
  <div className="bg-[#10B981] text-white pt-16">
    <ProfessionalsRoles />
  </div>
  </div>
  

  );
}
