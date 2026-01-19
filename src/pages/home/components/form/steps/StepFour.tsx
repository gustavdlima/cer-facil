import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import cersData from "@/data/cers.json";
import { Bold } from "lucide-react";

interface StepFourProps {
  deficiencies?: string[];
  ageGroup?: string;
  location?: string;
  userCoordinates?: { lat: number; lng: number } | null;
  onBack: () => void;
  onFinish: () => void; 
}

interface MatchingResult {
  cer: (typeof cersData)[0];
  score: number;
  distancia: number;
  compatibilidade: number;
}

export default function StepFour({
  deficiencies = [],
  ageGroup = "",
  location = "",
  userCoordinates,
  onBack,
  onFinish, 
}: StepFourProps) {
  const [results, setResults] = useState<MatchingResult[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para calcular distância real entre coordenadas (Haversine)
  function calcularDistanciaReal(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ): number {
    const R = 6371; // Raio da Terra em km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  useEffect(() => {
    if (!userCoordinates || !userCoordinates.lat || !userCoordinates.lng) {
      setLoading(false);
      return;
    }

    const matchedCERs = cersData
      .map((cer) => {
        // Calcular compatibilidade com deficiências
        const compatibilidade =
          deficiencies.filter((def) =>
            cer.especialidades.some(
              (esp) =>
                esp.toLowerCase().includes(def.toLowerCase()) ||
                def.toLowerCase().includes(esp.toLowerCase()),
            ),
          ).length / deficiencies.length;

        // Calcular distância real usando coordenadas GPS do usuário
        const distancia = calcularDistanciaReal(
          userCoordinates.lat,
          userCoordinates.lng,
          cer.localizacao.latitude,
          cer.localizacao.longitude,
        );

        // Score baseado em compatibilidade (70%) e proximidade (30%)
        const scoreDistancia = Math.max(0, 1 - distancia / 200);
        const score = compatibilidade * 0.7 + scoreDistancia * 0.3;

        return {
          cer,
          score,
          distancia: Math.round(distancia * 10) / 10,
          compatibilidade,
        };
      })
      .filter((result) => result.compatibilidade > 0)
      .sort((a, b) => b.score - a.score);

    setResults(matchedCERs);
    setLoading(false);
  }, [deficiencies, userCoordinates]);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Calculando distâncias e compatibilidade...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Resultados da Busca
          </CardTitle>
          <CardDescription>
            CERs ordenados por compatibilidade e proximidade
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-lg">Dados da busca</h3>

            <div>
              <p className="font-medium mb-1">Deficiências:</p>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                {deficiencies.map((def, index) => (
                  <li key={index}>{def}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium mb-1">Faixa etária:</p>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>{ageGroup}</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              CERs Recomendados ({results.length} encontrado
              {results.length !== 1 ? "s" : ""})
            </h3>

            {results.length === 0 ? (
              <div className="text-center p-8 text-muted-foreground border-2 border-dashed border-primary/50 rounded-lg">
                <p>Nenhum CER encontrado para as deficiências selecionadas.</p>
                <p className="text-sm mt-2">
                  Tente ajustar os filtros ou entre em contato conosco.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {results.slice(0, 5).map((result, index) => (
                  <Card
                    key={result.cer.id}
                    className="border-l-4 border-l-primary max-w-2xl mx-auto"
                  >
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">
                          #{index + 1}
                        </span>
                        <h4 className="font-normal text-lg">
                          {result.cer.nome}
                        </h4>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">
                          Endereço:
                        </span>{" "}
                        {result.cer.endereco.rua}, {result.cer.endereco.numero}{" "}
                        – {result.cer.endereco.bairro}, {result.cer.cidade} –
                        CEP: {result.cer.endereco.cep}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">Distância:</span>
                          <span className="px-2 py-1 rounded text-xs border border-border">
                            {result.distancia} km
                          </span>
                        </div>

                        <div className="space-y-1">
                          <span className="text-sm font-medium">
                            Especialidades:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {result.cer.especialidades.map((esp) => {
                              const isMatch = deficiencies.some(
                                (def) =>
                                  esp
                                    .toLowerCase()
                                    .includes(def.toLowerCase()) ||
                                  def.toLowerCase().includes(esp.toLowerCase()),
                              );

                              return (
                                <span
                                  key={esp}
                                  className={`px-2 py-1 rounded text-xs ${
                                    isMatch
                                      ? "bg-primary text-primary-foreground"
                                      : "border border-border"
                                  }`}
                                >
                                  {esp}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-2">
                        <Button size="sm" variant="outline">
                          Saiba mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardContent className="flex justify-between border-t pt-4">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button onClick={onFinish}>
            Finalizar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
