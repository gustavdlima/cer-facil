import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StepOne() {
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
      </Card>
    </div>
  );
}
