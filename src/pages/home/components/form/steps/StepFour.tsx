import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface StepFourProps {
  deficiencies?: string[];

  ageGroup?: string;

  location?: string;

  onBack: () => void;
}

export default function StepFour({
  deficiencies = [],
  ageGroup = "",
  location = "",
  onBack,
}: StepFourProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Resultados da Busca</CardTitle>
          <CardDescription>
            Encontramos os melhores CERs para você
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <h3 className="font-semibold text-lg">Dados da sua busca:</h3>

            <div>
              <strong>Deficiências:</strong>
              <ul className="list-disc list-inside ml-4">
                {deficiencies.map((def, index) => (
                  <li key={index}>{def}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Faixa etária:</strong> {ageGroup}
            </div>

            <div>
              <strong>Localização:</strong> {location}
            </div>
          </div>

          <div className="border-2 border-dashed border-primary/50 p-8 rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              📍 ÁREA DE RESULTADOS - IMPLEMENTAR AQUI
            </p>
            <p className="text-sm text-muted-foreground">
              Aqui você deve exibir:
            </p>
            <ul className="text-sm text-muted-foreground text-left max-w-md mx-auto mt-2 space-y-1">
              <li>• Lista de CERs encontrados</li>
              <li>• Informações de cada CER (nome, endereço, telefone)</li>
              <li>• Distância até cada CER</li>
              <li>• Especialidades atendidas</li>
              <li>• Botões de ação (ver detalhes, traçar rota)</li>
              <li>• Mapa com marcadores (opcional)</li>
            </ul>
          </div>
        </CardContent>

        {/* Botões de navegação */}
        <CardContent className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button>Finalizar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
