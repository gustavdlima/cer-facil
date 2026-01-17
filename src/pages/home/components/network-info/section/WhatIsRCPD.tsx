import ministerioLogo from "@/assets/images/ministerioLogo.png";

export default function WhatIsRCPD() {
  return (
    <div id="what-is-rcpd">
      <h1 className="font-bold text-5xl sm:text-4xl border-b-5 pb-4 text-left mb-6">
        O que é a Rede de Cuidado à Pessoa com Deficiência?
      </h1>

      <div className="flex gap-8 items-start">
        <div id="left" className="flex-1">
          <p className="text-left">
            A Rede de Cuidados à Pessoa com Deficiência tem como objetivo
            ampliar o acesso e qualificar o atendimento no Sistema Único de
            Saúde (SUS), oferecendo cuidado integral às pessoas com deficiência
            ao longo de todas as fases da vida.
          </p>
          <p className="mt-5 text-left">
            A atuação da rede envolve ações de prevenção, identificação precoce
            e reabilitação, considerando diferentes tipos de deficiência e
            necessidades de cuidado.
          </p>
        </div>

        <div id="right" className="flex-shrink-0">
          <img
            src={ministerioLogo}
            alt="logo ministério da saúde"
            className="w-48"
          />
        </div>
      </div>
    </div>
  );
}
