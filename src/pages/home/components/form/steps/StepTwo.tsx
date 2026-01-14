import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepsTwoProps {
  onBack: () => void;
  onNext: () => void;
}

export default function StepTwo({ onBack, onNext }: StepsTwoProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Qual é a idade da pessoa que receberá o atendimento?
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Card id="crianca">
            <CardHeader>
              <CardDescription>EMOJI</CardDescription>
              <CardTitle>Criança</CardTitle>
              <CardContent>0 a 12 anos</CardContent>
            </CardHeader>
          </Card>

          <Card id="adolescente">
            <CardHeader>
              <CardDescription>EMOJI</CardDescription>
              <CardTitle>Adolescente</CardTitle>
              <CardContent>13 a 17 anos</CardContent>
            </CardHeader>
          </Card>

          <Card id="adulto">
            <CardHeader>
              <CardDescription>EMOJI</CardDescription>
              <CardTitle>Adulto</CardTitle>
              <CardContent>18 a 59 anos</CardContent>
            </CardHeader>
          </Card>

          <Card id="idoso">
            <CardHeader>
              <CardDescription>EMOJI</CardDescription>
              <CardTitle>Idoso</CardTitle>
              <CardContent>60 ou mais anos</CardContent>
            </CardHeader>
          </Card>
        </CardContent>

        <div className="flex justify-between mt-4">
          <Button onClick={onBack}>Voltar</Button>
          <Button onClick={onNext}>Próximo</Button>
        </div>
      </Card>
    </div>
  );
}
