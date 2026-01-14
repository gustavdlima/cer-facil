import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepThreeProps {
  onBack: () => void;
  onNext: () => void;
}

export default function StepThree({ onBack, onNext }: StepThreeProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Localização</CardTitle>
          <CardDescription>
            Precisamos da sua localização para encontrar o CER mais apropriado
            para você.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div>
            <Button>Permitir Localização</Button>

            <div>Ou</div>
            <div>
              <label>Digite seu CEP:</label>
              <div>
                <input type="number" placeholder="00000-000" maxLength={9} />
                <button>Buscar</button>
              </div>
            </div>
          </div>
        </CardContent>

        <CardContent className="flex justify-between">
          <Button onClick={onBack}>Voltar</Button>
          <Button onClick={onNext}>Próximo</Button>
        </CardContent>
      </Card>
    </div>
  );
}
