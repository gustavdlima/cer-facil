import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function KnowMoreAboutCers() {
    const [activeSlide, setActiveSlide] = useState(1); // 0: Functioning, 1: Main, 2: Types

    const handleSlideLeft = () => {
        setActiveSlide(2);
    };

    const handleSlideRight = () => {
        setActiveSlide(0);
    };

    const handleBack = () => {
        setActiveSlide(1);
    };

    return (
        <section className="px-6 py-16 overflow-hidden">
            <div className="mx-auto max-w-5xl relative">
                <div
                    className="flex flex-row w-[300%] transition-transform duration-500 ease-in-out will-change-transform"
                    style={{ transform: `translateX(-${activeSlide * (100 / 3)}%)` }}
                >
                    {/* Slide 0: Functioning (Left Panel) */}
                    <div className="w-1/3 px-4 shrink-0 flex flex-col items-center">
                        <div className="w-full max-w-5xl">
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 mb-6 text-blue-600 hover:underline font-medium"
                            >
                                <ArrowLeft size={20} />
                                Voltar
                            </button>
                            <h3 className="font-bold text-2xl mb-6">
                                Aqui Estão Detalhes Sobre a Estrutura e Funcionamento dos CERs
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    "Horário de atendimento - 8 horas por dia, de segunda a sexta.",
                                    "Devem contar com um Responsável Técnico de nível superior, que atua na gestão administrativa, coordenação da equipe, articulação em rede e garantia do bom funcionamento do serviço.",
                                    "As equipes devem ser multiprofissionais, com profissionais presentes nos turnos da manhã e tarde, conforme cadastro no CNES.",
                                    "As atribuições comuns incluem acolhimento, anamnese, elaboração e reavaliação do PTS, avaliação de funcionalidade, atendimentos individuais ou em grupo, registros, participação em reuniões, criação de protocolos, articulação com a Rede de Cuidados e ações intersetoriais.",
                                    "O foco do atendimento é promover autonomia e participação social das pessoas com deficiência por meio de uma abordagem interdisciplinar envolvendo equipe, familiares e cuidadores.",
                                    "O CER deve, obrigatoriamente, fornecer cuidados desde o diagnóstico até a reabilitação, abrangendo todas as etapas do processo de habilitação/reabilitação. Os estabelecimentos devem garantir o funcionamento mínimo de 40 horas semanais, 5 dias por semana, durante os 12 meses do ano.",
                                ].map((text, index) => (
                                    <p key={index} className="border p-4 rounded-lg shadow-sm bg-white">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Slide 1: Main (Center Panel) */}
                    <div className="w-1/3 px-4 shrink-0 flex flex-col items-center">
                        <div className="w-full max-w-5xl">
                            <h2 className="font-bold text-3xl pb-4 mb-6 text-center">
                                Quer Saber Mais Sobre os CERs?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Card 1: Tipos -> Slides to Types (Right) */}
                                <div
                                    onClick={handleSlideLeft}
                                    className="bg-blue-50 border border-blue-100 p-8 rounded-xl cursor-pointer hover:shadow-lg transition-shadow flex items-center justify-center aspect-square"
                                >
                                    <h2 className="font-bold text-xl text-center text-blue-800">
                                        Conheça os Diferentes Tipos de CERs
                                    </h2>
                                </div>

                                {/* Card 2: Funcionamento -> Slides to Functioning (Left) */}
                                <div
                                    onClick={handleSlideRight}
                                    className="bg-green-50 border border-green-100 p-8 rounded-xl cursor-pointer hover:shadow-lg transition-shadow flex items-center justify-center aspect-square"
                                >
                                    <h2 className="font-bold text-xl text-center text-green-800">
                                        Descubra Mais Detalhes Sobre o Funcionamento dos CERs
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2: Types (Right Panel) */}
                    <div className="w-1/3 px-4 shrink-0 flex flex-col items-center">
                        <div className="w-full max-w-5xl">
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 mb-6 text-blue-600 hover:underline font-medium"
                            >
                                <ArrowLeft size={20} />
                                Voltar
                            </button>
                            <h3 className="font-bold text-2xl mb-6">Tipos de CERs</h3>
                            <p className="mb-6 text-gray-700">
                                Os CER são classificados de acordo com a composição das modalidades
                                de reabilitação que oferecem: CER II, CER III e CER IV. Eles podem
                                ser organizados com a composição de duas, três ou quatro
                                modalidades de reabilitação, que incluem: auditiva, física,
                                intelectual e visual. Se constituem como serviços de atenção
                                ambulatorial especializada, de abrangência regional e acesso
                                regulado, que oferecem diagnóstico, tratamento, concessão,
                                adaptação e manutenção de Tecnologia Assistiva, sendo referência
                                para a Rede de Atenção à Saúde (RAS).
                            </p>
                            <div className="space-y-4">
                                <p className="border p-4 rounded-lg shadow-sm bg-white border-l-4 border-l-blue-500">
                                    <strong>CER II (Duas Modalidades):</strong> O CER II é projetado
                                    para atender a duas modalidades de reabilitação
                                </p>
                                <p className="border p-4 rounded-lg shadow-sm bg-white border-l-4 border-l-green-500">
                                    <strong>CER III (Três Modalidades):</strong> O CER III é
                                    organizado para oferecer três modalidades de reabilitação
                                </p>
                                <p className="border p-4 rounded-lg shadow-sm bg-white border-l-4 border-l-purple-500">
                                    <strong>CER IV (Quatro Modalidades):</strong> O CER IV é a
                                    tipologia de maior complexidade, sendo organizado para atender às
                                    quatro modalidades de reabilitação: Auditiva, Física, Intelectual
                                    e Visual
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
