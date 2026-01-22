import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";

export default function CersCards() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

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
          {(CERS as DadosCers[]).map((cer) => {
            const isExpanded = expandedCards.includes(cer.id);

            return (
              
              <Card
                key={cer.id}
                id={`${cer.id}`}
                className="max-w-sm w-full mx-auto h-full"
              >
                <CardHeader>
                  <CardTitle className="text-left text-base font-normal">
                    {cer.nome}
                  </CardTitle>
                </CardHeader>

                
                <CardContent className="flex flex-col justify-between h-full pb-6">
                  <div className="space-y-3 text-sm">
                   
                    {!isExpanded && (
                      <>
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
                          <span className="font-normal">Telefone:</span>{" "}
                          <span className="text-muted-foreground">
                            {cer.telefone || "—"}
                          </span>
                        </p>
                      </>
                    )}

                    {/* Conteúdo expandido */}
                    {isExpanded && (
                      <>
                        <p>
                          <span className="font-normal">Especialidades:</span>{" "}
                          <span className="text-muted-foreground block">
                            {cer.especialidades.join(", ")}
                          </span>
                        </p>

                        <p>
                          <span className="font-normal">Endereço completo:</span>{" "}
                          <span className="text-muted-foreground block">
                            {cer.endereco.rua}, {cer.endereco.numero} –{" "}
                            {cer.endereco.bairro} – {cer.cidade} – PB
                          </span>
                        </p>

                        <p>
                          <span className="font-normal">CEP:</span>{" "}
                          <span className="text-muted-foreground block">
                            {cer.endereco.cep || "—"}
                          </span>
                        </p>

                        <p>
                          <span className="font-normal">Email:</span>{" "}
                          <span className="text-muted-foreground block">
                            {cer.email || "—"}
                          </span>
                        </p>

                        <p>
                          <span className="font-normal">Telefone:</span>{" "}
                          <span className="text-muted-foreground block">
                            {cer.telefone || "—"}
                          </span>
                        </p>

                        {("textoExpandido" in cer || "descricao" in cer) && (
                          <p className="text-muted-foreground text-justify">
                            {(
                              (cer as any).textoExpandido ||
                              (cer as any).descricao ||
                              "Informações adicionais não disponíveis."
                            )}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className="mt-4 self-center">
                    <Button
                      onClick={() => toggleCard(cer.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`cer-details-${cer.id}`}
                    >
                      {isExpanded ? "Voltar" : "Mais informações"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
