import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NetworkInfo() {
    return (
        <div className="container mx-auto p-8">

            <h1 className="font-bold text-5xl sm:text-4xl border-b-5 pb-4">O que é a Rede de Apoio à Pessoa com Deficiência (RCPD)</h1>
            <p className="m-5 text-justify">A Rede de Cuidado à Pessoa com Deficiência (RCPD) é uma política pública instituída pelo Ministério da Saúde em 2012, no âmbito da Rede de Atenção à Saúde (RAS) do SUS, como parte do programa Viver sem Limite (Plano Nacional dos Direitos da Pessoa com Deficiência como finalidade promover, por meio da integração e articulação de políticas, programas e ações, o exercício pleno e equitativo dos direitos das pessoas com deficiência). Seu objetivo é ampliar o acesso e qualificar o atendimento às pessoas com deficiência temporária ou permanente; progressiva, regressiva ou estável; intermitente ou contínua, no Sistema Único de Saúde (SUS). A RCPD funciona como uma articulação entre diferentes pontos de atenção do SUS, garantindo que a pessoa com deficiência seja acompanhada de forma integral em todas as fases da vida.</p>

            <div className="grid grid-cols-3  m-10">
                <div  >
                    <Card className="max-w-2xl mx-auto m-5">
                        <CardHeader>
                            <CardTitle className="text-center text-5xl sm:text-3xl">Atenção Básica</CardTitle>
                            <CardDescription>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button>Saber Mais</Button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card className="max-w-2xl mx-auto m-5">
                        <CardHeader>
                            <CardTitle className="text-center text-5xl sm:text-3xl">Atenção Especializada em Reabilitação</CardTitle>
                            <CardDescription>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button>Saber Mais</Button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card className="max-w-2xl mx-auto m-5">
                        <CardHeader>
                            <CardTitle className="text-center text-5xl sm:text-3xl">Atenção Hospitalar e de Urgência e Emergência</CardTitle>
                            <CardDescription>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button>Saber Mais</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="font-bold text-5xl sm:text-4xl border-b-5 pb-4">Atenção Básica</h1>
                    <p className="m-5 text-justify">A Atenção Básica é a modalidade de atenção à saúde com maior grau de descentralização e capilaridade, sendo o ponto de entrada da Rede de Cuidados à Pessoa com Deficiência (RCPD). Seus principais pontos de atenção incluem as Unidades Básicas de Saúde (UBS), a eMulti- Equipes Multiprofissionais e a Atenção Odontológica.
                        A Atenção Básica tem como funções coordenar o cuidado, ordenar a rede de atenção à saúde, identificar riscos, necessidades e demandas, além de utilizar e articular tecnologias de cuidado individual e coletivo. Entre suas ações estratégicas destacam-se: identificação precoce de deficiências, acompanhamento de recém-nascidos de alto risco, educação em saúde voltada à prevenção de acidentes, acompanhamento domiciliar, apoio às famílias e orientação no ambiente escolar, garantindo acessibilidade e inclusão.
                    </p>

                    <div className="m-5">
                        <h2 className="font-bold text-5xl sm:text-2xl">Componentes da Atenção Básica</h2>
                        <div className="m-5">
                            <div>
                                <h1 className="font-bold">Unidades Básicas de Saúde (UBS)</h1>
                                <p className="m-5 text-justify">As UBSs são centros de atendimento primário à saúde, onde equipes de Saúde da Família realizam uma gama de ações de saúde. Elas representam a principal porta de entrada para o Sistema Único de Saúde (SUS), atendendo a necessidades de saúde individual e coletiva.
                                </p>
                            </div>
                            <div>
                                <h1 className="font-bold">Equipes Multiprofissionais (eMulti)</h1>
                                <p className="m-5 text-justify">A eMulti são equipes compostas por profissionais de saúde, de diferentes áreas do conhecimento e categorias profissionais. Elas operam de maneira complementar e integrada às outras equipes que atuam na Atenção Primária à Saúde (APS): Equipe de Saúde da Família - eSF; Equipe de Saúde da Família Ribeirinha - eSFR; Equipe de Consultório na Rua - eCRequipe de Atenção Primária - eAP; Equipe de Unidade Básica de Saúde Fluvial - UBSF
                                    Essas equipes atuam juntas, sendo responsáveis pela mesma população e território, fortalecendo as articulações com outros equipamentos de saúde e de outros setores (educação, serviço social, cultura, lazer, esporte, entre outros).
                                </p>
                            </div>
                            <div>
                                <h1 className="font-bold">Atenção Odontológica</h1>
                                <p className="m-5 text-justify">A Atenção Odontológica na Rede de Cuidados à Pessoa com Deficiência deve ser planejada de forma a atender às necessidades específicas de cada usuário, considerando diagnóstico médico, condições de saúde, agravos associados, limitações e capacidades individuais. Para isso, são elaborados protocolos de atenção que definem, em cada nível, os cuidados a serem realizados. Por envolver atenção em todos os níveis de complexidade, a Atenção Odontológica exige trabalho integrado da equipe de saúde, garantindo que os cuidados sejam contínuos e coordenados. Além das ações de prevenção, promoção da saúde e tratamento, a atenção odontológica atua como coordenadora do cuidado ao longo de toda a Rede de Cuidados, garantindo encaminhamentos adequados e a continuidade do acompanhamento das pessoas com deficiência.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-5xl sm:text-4xl border-b-5 pb-4">Atenção Especializada em Reabilitação</h1>
                    <p className="m-5 text-justify">A Atenção Especializada em Reabilitação da Rede de Cuidados à Pessoa com Deficiência (RCPD) abrange ações voltadas à reabilitação auditiva, física, visual, intelectual, ostomia e múltiplas deficiências. Esse componente é formado por diferentes pontos de atenção, incluindo Serviços de Reabilitação especializados, Centros Especializados em Reabilitação (CER), Centros de Especialidades Odontológicas (CEO) e Oficinas Ortopédicas, todos integrados à rede para garantir atendimento contínuo e coordenado.</p>

                    <div className="m-5">
                        <h2 className="font-bold text-5xl sm:text-2xl">Componentes Atenção Especializada em Reabilitação</h2>
                        <div className="m-5">
                            <div>
                                <h1 className="font-bold">Centros Especializados em Reabilitação (CER)</h1>
                                <p className="m-5 text-justify">Os CERs proporcionam atenção integral e multiprofissional, incluindo diagnóstico, tratamento, concessão e manutenção de tecnologia assistiva, além de desenvolver Projetos Terapêuticos Individuais e garantir transporte adaptado para acesso aos serviços. Esses centros podem atender múltiplas modalidades de reabilitação, conforme a necessidade de cada usuário.</p>
                            </div>
                            <div>
                                <h1 className="font-bold">Centros de Especialidades Odontológicas (CEO)</h1>
                                <p className="m-5 text-justify">Os CEOs oferecem atendimento odontológico especializado para pessoas com deficiência, atuando também como referência municipal ou regional e como apoio técnico para as equipes de Atenção Básica.</p>
                            </div>
                            <div>
                                <h1 className="font-bold">Oficinas Ortopédicas</h1>
                                <p className="m-5 text-justify">Oficinas Ortopédicas são responsáveis pela confecção, adaptação e manutenção de órteses, próteses e meios auxiliares de locomoção (OPM), garantindo mobilidade, funcionalidade e autonomia dos usuários.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-5xl sm:text-4xl border-b-5 pb-4">Atenção Hospitalar e de Urgência e Emergência</h1>
                    <p className="m-5 text-justify">A Atenção Hospitalar e de Urgência e Emergência na Rede de Cuidados à Pessoa com Deficiência visa garantir atendimento imediato e especializado a pessoas com deficiência em situações críticas de saúde.</p>
                </div>
            </div>
        </div>
    )
}
