import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepOneProps {
  setShowForm: (show: boolean) => void;
}

export default function StepOne({ setShowForm }: StepOneProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Qual deficiência(s) deseja buscar atendimento?</CardTitle>
          <CardDescription>
            Você pode selecionar mais de uma opção
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Card id="fisica">
            <CardHeader>
              <CardTitle>Deficiência física</CardTitle>
              <CardDescription>EMOJI</CardDescription>
            </CardHeader>
          </Card>

          <Card id="auditiva">
            <CardHeader>
              <CardTitle>Deficiência Auditiva</CardTitle>
              <CardDescription>EMOJI</CardDescription>
            </CardHeader>
          </Card>

          <Card id="visual">
            <CardHeader>
              <CardTitle>Deficiência Visual</CardTitle>
              <CardDescription>EMOJI</CardDescription>
            </CardHeader>
          </Card>

          <Card id="intelectual">
            <CardHeader>
              <CardTitle>Deficiência Intelectual</CardTitle>
              <CardDescription>EMOJI</CardDescription>
            </CardHeader>
          </Card>

          <Card id="tea">
            <CardHeader>
              <CardTitle>Transtorno espectro autista (TEA)</CardTitle>
              <CardDescription>EMOJI</CardDescription>
            </CardHeader>
          </Card>
        </CardContent>

        <CardContent className="flex justify-between">
          <Button variant="outline" onClick={() => setShowForm(false)}>
            Voltar
          </Button>
          <Button>Próximo</Button>
        </CardContent>
      </Card>
    </div>
  );
}
