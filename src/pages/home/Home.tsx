import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Bem-vindo ao CER Fácil</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Esta é a página inicial. Comece a construir sua aplicação aqui!
          </p>
          <Button>Começar</Button>
        </CardContent>
      </Card>
    </div>

  );
}
