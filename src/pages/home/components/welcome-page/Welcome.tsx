import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function Welcome() {
  /*const scrollToNetworkInfo = () => {
  const element = document.getElementById("network-info");
  if (element) {
    const navbarHeight = 64; // altura da navbar (h-16)
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
};*/

  return (
    <div className="w-screen h-screen flex items-center justify-center p-8">
      <Card className="max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">CER Fácil</CardTitle>
          <CardDescription className="text-lg">
            Conectamos pessoas com deficiência aos Centros de Reabilitação
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground text-center leading-relaxed">
            Seja bem-vindo ao CER Fácil. Aplicação voltada a facilitar o
            conhecimento e acesso aos Centros de Reabilitação (CERs) para
            pessoas com deficiência.
          </p>
        </CardContent>

        <CardContent className="text-center">
          <Button><Link to="/network-info">Saber Mais</Link></Button>
          {/*<Button onClick={scrollToNetworkInfo}>Saber Mais</Button>*/}
        </CardContent>
      </Card>
    </div>
  );
}
