import ministerioLogo from "@/assets/images/ministerioLogo.png";
import { Heart, Users, Shield } from "lucide-react";

export default function WhatIsRCPD() {
  const features = [
    { icon: Heart, title: "Cuidado Integral", desc: "Atendimento em todas as fases da vida" },
    { icon: Users, title: "Acesso Universal", desc: "Ampliação do acesso no SUS" },
    { icon: Shield, title: "Prevenção", desc: "Identificação precoce e reabilitação" },
  ];

  return (
    <section id="what-is-rcpd" className="px-6 py-20 bg-gradient-to-b from-white to-blue-50/30 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="font-bold text-4xl mb-4 text-black">
            O que é a Rede de Cuidado à Pessoa com Deficiência?
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              A Rede de Cuidados à Pessoa com Deficiência tem como objetivo
              ampliar o acesso e qualificar o atendimento no Sistema Único de
              Saúde (SUS), oferecendo cuidado integral às pessoas com
              deficiência ao longo de todas as fases da vida.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              A atuação da rede envolve ações de prevenção, identificação
              precoce e reabilitação, considerando diferentes tipos de
              deficiência e necessidades de cuidado.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={ministerioLogo}
                alt="logo ministério da saúde"
                className="w-64 relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
