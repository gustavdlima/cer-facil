import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StepThreeProps {
  onBack: () => void;
  onNext: () => void;
}

export default function StepThree({ onBack, onNext }: StepThreeProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Step Three</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Conteúdo do passo 3</p>
        </CardContent>
        <CardContent className="flex justify-between">
          <Button onClick={onBack}>Voltar</Button>
          <Button onClick={onNext}>Próximo</Button>
        </CardContent>
      </Card>
    </div>
  );
}
