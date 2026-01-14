import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dadosCers } from "../../../../components/dadosCers/dadosCers.js"

export default function CersCards() {
    return (
        <div className="
            grid 
            gap-x-10 gap-y-10 
            mt-30 mb-30
            sm:grid-cols-2 sm:gap-x-1 
            lg:grid-cols-3 
            2xl:grid-cols-4 
            ">
                
            {dadosCers.map((cer) => (
                <Card key={cer.id} className="relative max-w-2xl mx-auto w-75 h-100">
                    <CardHeader>
                        <CardTitle>{cer.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm">
                            <span className="font-bold block">ESPECIALIDADES:</span> {cer.especialidades} <br />
                            <span className="font-bold block mt-2">ENDEREÇO:</span> {cer.endereco} - {cer.cidade} - PB <br />
                            <span className="font-bold block mt-2">EMAIL:</span> {cer.email} <br />
                            <span className="font-bold block mt-2">TELEFONE:</span> {cer.telefone}
                        </p>
                        <Button className="absolute bottom-5">Mais informações</Button>
                    </CardContent>
                </Card>
            ))}

        </div>
    )
}