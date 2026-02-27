import { Heart, Users, Shield } from "lucide-react";

export default function WhatIsRCPD() {
  const features = [
    {
      icon: Heart,
      title: "Cuidado Para Todas as Idades",
      desc: "A Rede de Cuidado à Pessoa com Deficiência tem o objetivo de ajudar Pessoas com Deficiência (PCDs) a acessar serviços de reabilitação dentro do SUS. Ela atende crianças, pré-adolescentes, adolescentes, adultos e idosos.",
    },
    {
      icon: Shield,
      title: "Prevenção",
      desc: "A rede também trabalha com a prevenção e descobrimento precoce de deficiências.",
    },
    {
      icon: Users,
      title: "Disponível Para Todas as Pessoas com Deficiência",
      desc: "A rede também tem o objetivo de garantir que qualquer pessoa, com qualquer deficiência, possa acessar serviços de saúde de qualidade.",
    },
  ];

  return (
    <section
      id="what-is-rcpd"
      className="px-6 py-20 bg-gradient-to-b from-white to-blue-50/30 relative"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="font-bold text-4xl mb-4 text-black">
            O que é a Rede de Cuidado à Pessoa com Deficiência?
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-3)] rounded-full"></div>
        </div>

        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center">
                  <feature.icon className="w-16 h-16 text-[var(--cor-3)] mb-4" />
                  <h3 className="font-bold text-2xl">{feature.title}</h3>
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-lg leading-relaxed text-gray-700">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
