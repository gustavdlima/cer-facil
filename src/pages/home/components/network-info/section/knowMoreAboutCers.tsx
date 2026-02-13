import smilingMan from "@/assets/images/smiling_man.jpg";

export default function KnowMoreAboutCers() {
    return (
        <section className="px-6 py-24 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl space-y-32">

                {/* Section 1: Types of CERs */}
                <div className="grid grid-cols-2 grid-rows-2 gap-16 items-center">
                    <div className="relative group">
                        <img
                            src={smilingMan}
                            alt="Homem sorrindo representando atendimento humanizado"
                            className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] transform transition duration-500 hover:scale-[1.02]"
                        />
                        <span>Imagem placeholder, é apenas ilustrativa</span>
                    </div>

                    <div>
                        <div>
                            <h2 className="text-3xl font-bold text-left mb-12">
                                Conheça os Diferentes Tipos de CERs
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Os CER são classificados de acordo com a composição das modalidades de reabilitação que oferecem: CER II, CER III e CER IV. Eles podem ser organizados com a composição de duas, três ou quatro modalidades de reabilitação, que incluem: auditiva, física, intelectual e visual. Se constituem como serviços de atenção ambulatorial especializada, de abrangência regional e acesso regulado, que oferecem diagnóstico, tratamento, concessão, adaptação e manutenção de Tecnologia Assistiva, sendo referência para a Rede de Atenção à Saúde (RAS).
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "CER II", desc: "O CER II é projetado para atender a duas modalidades de reabilitação.", color: "bg-blue-50 border-blue-200 text-blue-900" },
                                { title: "CER III", desc: "O CER III é organizado para oferecer três modalidades de reabilitação.", color: "bg-green-50 border-green-200 text-green-900" },
                                { title: "CER IV", desc: "O CER IV é a tipologia de maior complexidade, sendo organizado para atender às quatro modalidades de reabilitação: Auditiva, Física, Intelectual e Visual.", color: "bg-purple-50 border-purple-200 text-purple-900" }
                            ].map((item, idx) => (
                                <div key={idx} className={`p-5 rounded-2xl border ${item.color} transition-all duration-300 hover:shadow-md`}>
                                    <strong className="block text-lg mb-1">{item.title}</strong>
                                    <span className="opacity-90">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5 Deficiency Types */}
                    <div className="grid col-span-2 grid-cols-2 md:grid-cols-3 gap-8 pt-6">
                        {[
                            "Deficiência física",
                            "Deficiência auditiva",
                            "Deficiência visual",
                            "Deficiência intelectual",
                            "Transtorno do Espectro Autista (TEA)"
                        ].map((type, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-64 flex flex-col">
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg pt-4">{type}</h3>
                                <p className="text-base text-gray-500 leading-snug flex-1 pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Structure and Functioning */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <h2 className="text-3xl font-bold text-left mb-12">
                            Estrutura e Funcionamento
                        </h2>

                        <div className="space-y-4">
                            {[
                                "Horário de atendimento - 8 horas por dia, de segunda a sexta.",
                                "Devem contar com um Responsável Técnico de nível superior, que atua na gestão administrativa, coordenação da equipe, articulação em rede e garantia do bom funcionamento do serviço.",
                                "As equipes devem ser multiprofissionais, com profissionais presentes nos turnos da manhã e tarde, conforme cadastro no CNES.",
                                "As atribuições comuns incluem acolhimento, anamnese, elaboração e reavaliação do PTS, avaliação de funcionalidade, atendimentos individuais ou em grupo, registros, participação em reuniões, criação de protocolos, articulação com a Rede de Cuidados e ações intersetoriais.",
                                "O foco do atendimento é promover autonomia e participação social das pessoas com deficiência por meio de uma abordagem interdisciplinar envolvendo equipe, familiares e cuidadores.",
                                "O CER deve, obrigatoriamente, fornecer cuidados desde o diagnóstico até a reabilitação, abrangendo todas as etapas do processo de habilitação/reabilitação. Os estabelecimentos devem garantir o funcionamento mínimo de 40 horas semanais, 5 dias por semana, durante os 12 meses do ano."
                            ].map((text, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-green-500 shrink-0" />
                                    <p className="text-gray-700 leading-relaxed font-medium">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative group">
                        <img
                            src={smilingMan}
                            alt="Estrutura e funcionamento humanizado"
                            className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] transform transition duration-500 hover:scale-[1.02]"
                        />
                        <span>Imagem placeholder, é apenas ilustrativa</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
