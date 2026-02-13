import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Baby, User, Users, UserCog } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepsTwoProps {
  selectedDeficiencies?: string[];
  onBack: () => void;
  onNext: (ageGroup: string) => void;
}

export default function StepTwo({ selectedDeficiencies = [], onBack, onNext }: StepsTwoProps) {
  const [selected, setSelected] = useState<string>("");

  const handleNext = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Qual é a idade da pessoa que receberá o atendimento?
          </CardTitle>
          {selectedDeficiencies.length > 0 && (
            <CardDescription>
              Deficiências selecionadas: {selectedDeficiencies.join(", ")}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-3">
          <Card
            onClick={() => setSelected("crianca")}
            className={`cursor-pointer transition-all ${
              selected === "crianca"
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Baby className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Criança</CardTitle>
                <CardDescription>0 a 12 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("adolescente")}
            className={`cursor-pointer transition-all ${
              selected === "adolescente"
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Adolescente</CardTitle>
                <CardDescription>13 a 17 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("adulto")}
            className={`cursor-pointer transition-all ${
              selected === "adulto"
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Adulto</CardTitle>
                <CardDescription>18 a 59 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("idoso")}
            className={`cursor-pointer transition-all ${
              selected === "idoso"
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <UserCog className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Idoso</CardTitle>
                <CardDescription>60 ou mais anos</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </CardContent>

        <CardContent className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button onClick={handleNext} disabled={!selected}>
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
