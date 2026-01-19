import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CersCards() {
    return (
        <div className="
            grid 
            gap-x-10 
            gap-y-10 
            mt-30 mb-30
            sm:grid-cols-2 sm:gap-x-1 
            lg:grid-cols-3 
            2xl:grid-cols-4 
            ">

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>FUNAD (Fundação Centro Integrado de Apoio ao Portador de Deficiência)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Auditiva, Física, Intelectual e Visual</span> <br />
                        <span>ENDEREÇO: Orestes Lisboa, S/N. BAIRRO: Conj Pedro Gondim CEP: 58031-090 - JOÃO PESSOA - PB</span> <br />
                        <span>EMAIL: funad@funad.pb.gov.br</span> <br />
                        <span>TELEFONE: (83) 3244-2451</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>
            
            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Instituto dos Cegos da Paraíba Adalgisa Cunha</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Intelectual e Visual</span> <br />
                        <span>ENDEREÇO: Avenida Santa Catarina,396 - Bairro dos Estados CEP: 58030-070 - JOÃO PESSOA - PB</span> <br />
                        <span>EMAIL: contato@icpac.com.br</span> <br />
                        <span>TELEFONE: (83) 3244-6220</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Centro de Reabilitação Antônio de Souza Maranhão</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Zilda Arns Neuman, S/N Loteamento Nossa Sen CEP: 58322-000 - Conde - PB</span> <br />
                        <span>EMAIL: cer2conde.pb@gmail.com</span> <br />
                        <span>TELEFONE: (83) 3298-1130</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Centro de Reabilitação Antônio de Souza Maranhão</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Zilda Arns Neuman, S/N Loteamento Nossa Sen CEP: 58322-000 - Conde - PB</span> <br />
                        <span>EMAIL: cer2conde.pb@gmail.com</span> <br />
                        <span>TELEFONE: (83) 3298-1130</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Complexo Neurofuncional Maria Moura de Aquino</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física, Visual e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Prefeito Manoel Lordão, 199 Esplanada CEP: 58200-028 - Guarabira - PB</span> <br />
                        <span>EMAIL: mmcer@gmail.com</span> <br />
                        <span>TELEFONE: (83) 99967-8987</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Centro de Reabilitação Dr José Dácio</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Auditiva e Física</span> <br />
                        <span>ENDEREÇO: Conjunto Helder Targino Maranhão, S/N Centro CEP: 58233-000- Araruna - PB</span> <br />
                        <span>EMAIL: cer2ararunapb@gmail.com</span> <br />
                        <span>TELEFONE: (83) 99987-2744</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>CER IV Centro Especializado em Reabilitação de Campina Grande</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Auditiva, Física, Intelectual e Visual</span> <br />
                        <span>ENDEREÇO: Luiz Mota, S/N Bodocongó CEP 58430-710 - Campina Grande - PB</span> <br />
                        <span>EMAIL: centrodereabilitacaocg@gmail.com</span> <br />
                        <span>TELEFONE: (83) 3077-1060</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Associações de Pais e Amigos dos Excepcionais – APAE de Campina Grande</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Prof Eutecia Vital Ribeiro, 525 Catolé CEP: 58410-205 - Campina Grande - PB</span> <br />
                        <span>EMAIL: *****</span> <br />
                        <span>TELEFONE: (83) 3337-2454</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>CER/CERPPOD</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua João Soares, 426 Jardim Califórnia CEP: 58700-318</span> <br />
                        <span>EMAIL: *****</span> <br />
                        <span>TELEFONE: (83) 99345-7829</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Centro de Reabilitação Motora</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Dr Gilverson de Araujo Cordeiro, 164 Centro CEP: 58500-000 - Monteiro - PB</span> <br />
                        <span>EMAIL: *****</span> <br />
                        <span>TELEFONE: (83) 3351-1513</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Centro Especializado em Reabilitação Doutor Aloysio Pereira Lima</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física, Intelectual e Visual</span> <br />
                        <span>ENDEREÇO: Rua Projetada, S/N Alto da Bela Vista CEP: 58755-000 - Monteiro - PB</span> <br />
                        <span>EMAIL: cerprincesa@gmail.com</span> <br />
                        <span>TELEFONE: (83) 3457-2481</span> 
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Reabilita Centro Especializado em Reabilitação de Sousa</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Auditiva, Física, Intelectual e Visual</span> <br />
                        <span>ENDEREÇO: Rua Adelino Josefa Rita de Cássia, S/N Augusto Braga Multi CEP: 58808-458</span> <br />
                        <span>EMAIL: *****</span> <br />
                        <span>TELEFONE: (83) 99144-8094</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Policlínica Dr. Antônio Quinho</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Antônio Lopes da Silva, S/N Centro CEP: 58765-000 - Piancó - PB</span> <br />
                        <span>EMAIL: cerpianco@gmail.com</span> <br />
                        <span>TELEFONE: (83) 99144-8094</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>

            <Card className="relative max-w-2xl mx-auto w-75 h-100">
                <CardHeader>
                    <CardTitle>Centro de Reabilitação Física</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        <span>ESPECIALIDADES: Física e Intelectual</span> <br />
                        <span>ENDEREÇO: Rua Estevan Diniz, S/N Centro CEP: 58884-000- Catolé do Ro - PB</span> <br />
                        <span>EMAIL: *******</span> <br />
                        <span>TELEFONE: ******</span>
                    </p>
                    <Button className="absolute bottom-5">Mais informações</Button>
                </CardContent>
            </Card>
        </div>
    )
}
