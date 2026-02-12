import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../user-flow/Flow";
import FunadImage from "@/assets/images/FUNAD.png";


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
      className="py-16 bg-[var(--cor-5)] w-screen relative left-[calc(-50vw+50%)] px-6"
    >

      <div className="mx-auto max-w-[90%]">
        <div className="flex items-center w-full mb-12">
          <div className="w-[40%] md:w-[35%] h-[2px] bg-[var(--cor-4)] mr-6"></div>
          <h2
              className="text-3xl font-bold text-[var(--cor-4)] whitespace-nowrap"
          >
            REDE ESTADUAL DE REABILITAÇÃO
          </h2>
        </div>

        <div
          className="
                      grid
                      grid-cols-1       
                      sm:grid-cols-1    
                      md:grid-cols-1    
                      lg:grid-cols-2    
                      xl:grid-cols-3  
                      gap-6             
                      justify-items-center
                    "
        >
          
          {(CERS as DadosCers[]).map((cer, index) => (
            <Card key={cer.id} id={`${cer.id}`}
              style={{ backgroundColor: `var(--cor-${(index % 3) + 1})` } as React.CSSProperties}
              className="relative max-w-2xl mx-auto w-90 h-120 scroll-mt-20 text-white border-none rounded-none itens-center">
              {cer.id === 1 && (
                <img
                  src={FunadImage}
                  alt="FUNAD"
                  className="w-52"
                />
              )}

              <CardHeader>
                <CardTitle className="mt-45 text-xl text-left font-bold">
                  {cer.nome}
                </CardTitle>
              </CardHeader>

              <CardContent>

                <div className="space-y-3 text-lg ">
                  <p>
                    <span>Especialidades:</span>{" "}
                    <span className=" font-bold text-muted-foreground text-white">
                      {cer.especialidades.join(", ")}
                    </span>
                  </p>
                  <div className="flex justify-end">
                    <Button className="absolute bottom-5 bg-transparent hover:bg-[var(--cor-4)]" onClick={() => setShowFlow([true, cer.id])}> 
                      <img src="https://www.svgrepo.com/show/425982/right-arrow.svg" alt="" className="w-5 h-5"/>
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
