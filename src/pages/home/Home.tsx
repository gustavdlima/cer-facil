import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CersCards from "./components/cers-cards/CersCards";
import NetworkInfo from "./components/network-info/NetworkInfo";
// Certifique-se que o arquivo 'pet.jpg' continua na mesma pasta.
import petImage from "./pet.png";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pt-24">
      
      <div className="flex items-start justify-center gap-6 max-w-4xl mx-auto mb-12">
        
        {/* 1. A Imagem do PET Saúde (Tamanho Dobrado) */}
        <div className="shrink-0">
          <img 
            src={petImage} 
            alt="Logo PET Saúde" 
            // ALTERAÇÃO AQUI: Mudou de w-24 h-24 para w-48 h-48
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg bg-white"
          />
        </div>

        {/* 2. O Balão de Fala (Sem alterações) */}
        <Card className="relative overflow-visible rounded-[2rem] border-2 shadow-md flex-1 mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-primary font-bold">Bem-vindo ao CER Fácil</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-justify">
              Este mapa inteligente foi criado para conectar pessoas com deficiência e seus familiares aos Centros Especializados em Reabilitação (CER's) do estado. De forma rápida e personalizada, você poderá:
              <br /><br />
              Entender o que são os CER's e como funciona a rede de cuidado.
              <br />
              Descobrir quais unidades atendem ao tipo de deficiência que você busca.
              <br />
              Encontrar o CER mais adequado com base no seu município e necessidades específicas.
            </p>
          </CardContent>

          {/* 3. A Ponta do Balão (Sem alterações) */}
          <div className="absolute top-8 -left-3 w-6 h-6 bg-card border-b-2 border-l-2 border-border rotate-45"></div>
        
        </Card>
      </div>

      <NetworkInfo />
      <CersCards />
    </div>
  );
}