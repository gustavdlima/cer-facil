import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CersCards from "./components/cers-cards/CersCards";
import NetworkInfo from "./components/network-info/NetworkInfo";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Bem-vindo ao CER Fácil</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Este mapa inteligente foi criado para conectar pessoas com deficiência e suas famílares aos Centros Especializados em Reabilitação (CER's) do estado. De forma rápida e personalizada, você poderá:

            Entender o que são os CER's e como funciona a rede de cuidado.

            Descobrir quais unidades atendem ao tipo de deficiência que você busca.

            Encontrar o CER mais adequado com base no seu município e necessidades específicas.
          </p>
        </CardContent>
      </Card>
      <NetworkInfo />
      <CersCards />
    </div>
  );
}
