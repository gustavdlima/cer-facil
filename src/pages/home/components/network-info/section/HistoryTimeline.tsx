import { Circle, ArrowDown } from "lucide-react";

export default function HistoryTimeline() {
  return (
    <div id="history-rcpd" className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12">História da RCPD</h2>
      
      <div className="relative">
        {/* Linha vertical */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />
        
        {/* Antes de 2012 */}
        <div className="relative mb-8 ml-16">
          <div className="absolute -left-16 top-0">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
              <Circle className="w-6 h-6 text-white" fill="currentColor" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-bold mb-2">🟢 Antes de 2012</h3>
            <p className="text-gray-600">Fragmentação dos serviços, atendimento isolado e pouca articulação entre os pontos de atenção.</p>
          </div>
          <div className="absolute -left-14 top-16">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* 2012 - Instituição da RCPD */}
        <div className="relative mb-8 ml-16">
          <div className="absolute -left-16 top-0">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <Circle className="w-6 h-6 text-white" fill="currentColor" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-bold mb-2">🔵 2012 – Instituição da RCPD</h3>
            <p className="text-gray-600">Integração ao SUS, criação da Rede de Atenção à Saúde e lançamento do Plano Viver sem Limite.</p>
          </div>
          <div className="absolute -left-14 top-16">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Expansão dos serviços */}
        <div className="relative mb-8 ml-16">
          <div className="absolute -left-16 top-0">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full">
              <Circle className="w-6 h-6 text-white" fill="currentColor" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-bold mb-2">🟣 Expansão dos serviços</h3>
            <p className="text-gray-600">Ampliação dos centros de reabilitação, tecnologias assistivas e atenção especializada em todo território.</p>
          </div>
          <div className="absolute -left-14 top-16">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Consolidação do cuidado integral */}
        <div className="relative mb-8 ml-16">
          <div className="absolute -left-16 top-0">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
              <Circle className="w-6 h-6 text-white" fill="currentColor" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-bold mb-2">🟠 Consolidação do cuidado integral</h3>
            <p className="text-gray-600">Comunicação entre serviços, acompanhamento contínuo e foco nos direitos das pessoas com deficiência.</p>
          </div>
          <div className="absolute -left-14 top-16">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Rede em construção (Atual) */}
        <div className="relative mb-8 ml-16">
          <div className="absolute -left-16 top-0">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full">
              <Circle className="w-6 h-6 text-white" fill="currentColor" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-bold mb-2">⚪ Rede em construção (Atual)</h3>
            <p className="text-gray-600">Aprimoramento constante, enfrentamento de desafios regionais e avanço na inclusão e acessibilidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
