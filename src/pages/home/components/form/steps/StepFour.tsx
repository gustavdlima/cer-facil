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
          <CardTitle>QResultados</CardTitle>
        </CardHeader>
        <CardContent>
          <p>O melhor CER para você</p>
        </CardContent>
        <CardContent className="flex justify-between">
          <Button onClick={onBack}>Voltar</Button>
          <Button>Finalizar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
