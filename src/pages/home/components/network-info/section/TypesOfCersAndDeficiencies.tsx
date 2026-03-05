import { Building2, Accessibility, Ear, Eye, Brain, Puzzle } from 'lucide-react';

export default function TypesOfCersAndDeficiencies() {
    return (
        <section id="types-of-cer-deficiencies" className="px-6 py-24 bg-[var(--cor-bg-3)]">
            <div className="mx-auto max-w-6xl">

                {/* Cabeçalho da Seção */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="text-left mb-16">
                            {/* Texto principal agora em Branco para contraste no Verde */}
                            <h2 className="text-4xl font-bold mb-4 text-white">Conheça os Diferentes <br /> Tipos de CERs</h2>
                            <div className="w-24 h-1 bg-white rounded-full"></div>
                            <p className="text-white mt-6 max-w-2xl text-lg leading-relaxed opacity-90">
                                Os Centros Especializados em Reabilitação (CER) são unidades de saúde focadas em oferecer tratamentos especializados e diagnósticos precisos.
                            </p>
                        </div>

                        {/* Cards dos CERs com Ícones em tons de Verde */}
                        <div className="space-y-4">
                            {[
                                { id: 'II', desc: 'Atendimento a duas modalidades de reabilitação.' },
                                { id: 'III', desc: 'Organizado para oferecer três modalidades de reabilitação.' },
                                { id: 'IV', desc: 'Maior complexidade: Auditiva, Física, Intelectual e Visual.' },
                            ].map((cer) => (
                                <div key={cer.id} className="group flex items-center p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    {/* Ícone em Verde Esmeralda Escuro */}
                                    <div className="bg-[color-mix(in_srgb,var(--cor-bg-3),white_90%)] text-[color-mix(in_srgb,var(--cor-bg-3),black_30%)] p-3 rounded-xl mr-4 group-hover:bg-[var(--cor-bg-3)] group-hover:text-white transition-all duration-300">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-black text-lg">CER {cer.id}</h3>
                                        <p className="text-[color-mix(in_srgb,var(--cor-bg-3),black_20%)] text-sm font-medium">{cer.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl opacity-20 -z-10"></div>
                        <img
                            className="rounded-3xl shadow-2xl border-[12px] border-white/30 backdrop-blur-md"
                            src="https://conclinica.com.br/wp-content/uploads/2025/09/atendimento-humanizado-na-saude.png"
                            alt="Equipe médica"
                        />
                    </div>
                </div>

                {/* Seção de Deficiências */}
                <div className="text-left mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Tipos de Deficiência</h2>
                    <div className="w-24 h-1 bg-white rounded-full"></div>
                    <p className="text-white mt-4 max-w-2xl text-lg opacity-90">Entenda as particularidades de cada modalidade atendida pela rede de cuidados.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Deficiência Física", icon: <Accessibility className="w-10 h-10" />, text: "Alterações no corpo que podem comprometer a mobilidade ou a coordenação." },
                        { title: "Deficiência Auditiva", icon: <Ear className="w-10 h-10" />, text: "Perda parcial ou total da audição, podendo exigir aparelhos auditivos." },
                        { title: "Deficiência Visual", icon: <Eye className="w-10 h-10" />, text: "Desde a baixa visão até a cegueira total, envolvendo apoios como Braille." },
                        { title: "Deficiência Intelectual", icon: <Brain className="w-10 h-10" />, text: "Dificuldades no aprendizado e na compreensão de tarefas do dia a dia." },
                        { title: "TEA (Autismo)", icon: <Puzzle className="w-10 h-10" />, text: "Forma diferente de o cérebro lidar com informações, afetando interação e percepção." },
                    ].map((item, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* Ícone agora em tons de Verde Esmeralda para total harmonia */}
                            <div className="text-[color-mix(in_srgb,var(--cor-bg-3),black_30%)] mb-6 flex justify-center bg-[color-mix(in_srgb,var(--cor-bg-3),white_90%)] w-20 h-20 items-center mx-auto rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-xl text-black mb-3 text-center">{item.title}</h3>
                            <p className="text-[color-mix(in_srgb,var(--cor-bg-3),black_20%)] text-sm text-center leading-relaxed font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}