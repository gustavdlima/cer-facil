import { Button } from "@/components/ui/button";
import CerForm from "../form/CerForm";
import pet from "@/assets/images/pet.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WelcomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Welcome({ showForm, setShowForm }: WelcomeProps) {
  if (showForm) {
    return <CerForm setShowForm={setShowForm} />;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center p-8">
      <Card className="max-w-2xl">
        
        <CardHeader>
          <div className="flex items-center gap-6">
            {/* Imagem */}
            <img
              src={pet}
              alt="logo pet"
              className="w-52 h-52 rounded-full object-cover flex-shrink-0"
            />

            
            <div>
              <CardTitle className="text-4xl font-bold">
                CER Fácil
              </CardTitle>
              <CardDescription className="text-lg">
                Conectamos pessoas com deficiência aos Centros de Reabilitação
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Seja bem-vindo ao CER Fácil. Aplicação voltada a facilitar o
            conhecimento e acesso aos Centros de Reabilitação (CERs) para
            pessoas com deficiência.
          </p>
        </CardContent>

        <CardContent className="text-center">
          <Button onClick={() => setShowForm(true)}>
            Começar busca
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
