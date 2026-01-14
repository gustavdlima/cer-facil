import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StepFourProps {
  onBack: () => void;
}

export default function StepFour({ onBack }: StepFourProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Qual deficiência(s) deseja buscar atendimento?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Você pode selecionar mais de uma opção</p>
        </CardContent>
        <CardContent className="flex justify-between">
          <Button onClick={onBack}>Voltar</Button>
          <Button>Finalizar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
