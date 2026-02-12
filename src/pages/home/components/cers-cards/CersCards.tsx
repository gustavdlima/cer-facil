import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../user-flow/Flow";


interface CersCardsProps {
  showFlow: boolean;
  setShowFlow: (show: boolean) => void;
}

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {

  if (showFlow[0]) {
    return (
      <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />
    );
  }

  return (
    <section
      id="cers-card"
      className="py-16 bg-[#022D77] w-screen relative left-[calc(-50vw+50%)] px-6"
    >

      <div className="mx-auto max-w-[90%]">
        <div className="flex items-center w-full mb-12">
          <div className="w-[40%] md:w-[35%] h-[2px] bg-white mr-6"></div>
          <h2
            className="text-3xl font-bold text-white whitespace-nowrap"
          >
            REDE ESTADUAL DE REABILITAÇÃO
          </h2>
        </div>

        <div
          className="
                      grid
                      grid-cols-1       
                      sm:grid-cols-2    
                      md:grid-cols-3    
                      lg:grid-cols-4    
                      xl:grid-cols-5    
                      gap-6             
                      justify-items-center
                    "
        >
          {(CERS as DadosCers[]).map((cer) => (
            <Card key={cer.id} id={`${cer.id}`} className="relative max-w-2xl mx-auto w-75 h-95 scroll-mt-20">
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
                    <Button className="absolute bottom-5" onClick={() => setShowFlow([true, cer.id])}>Mais Informações</Button>
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