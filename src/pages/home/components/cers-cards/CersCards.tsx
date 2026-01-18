import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dadosCers from "@/data/cers.json";

export default function CersCards() {
  return (
    <section id="cers-card" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-left mb-12">
          Conheça os CER's da Paraíba
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-10 gap-y-10
            justify-items-center
          "
        >
          {(dadosCers as DadosCers[]).map((cer) => (
            <Card key={cer.id} className="relative max-w-2xl mx-auto w-75 h-95">
              <CardHeader>
                <CardTitle className="text-left text-base font-normal">
                  {cer.nome}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-normal">Especialidades:</span>{" "}
                    <span className="text-muted-foreground">
                      {cer.especialidades.join(", ")}
                    </span>
                  </p>

                  <p>
                    <span className="font-normal">Endereço:</span>{" "}
                    <span className="text-muted-foreground">
                      {cer.endereco.rua}, {cer.endereco.numero} –{" "}
                      {cer.endereco.bairro} – {cer.cidade} – PB
                    </span>
                  </p>

                  <p>
                    <span className="font-normal">CEP:</span>{" "}
                    <span className="text-muted-foreground">
                      {cer.endereco.cep}
                    </span>
                  </p>

                  <p>
                    <span className="font-normal">Email:</span>{" "}
                    <span className="text-muted-foreground">{cer.email}</span>
                  </p>

                  <p>
                    <span className="font-normal">Telefone:</span>{" "}
                    <span className="text-muted-foreground">
                      {cer.telefone}
                    </span>
                  </p>

                  <div className="flex justify-center">
                    <Button className="absolute bottom-5">
                      Mais informações
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
