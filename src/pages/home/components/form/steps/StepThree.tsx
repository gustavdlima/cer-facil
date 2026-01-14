import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect, useRef } from "react";
import { MapPin, Search, Loader2 } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepThreeProps {
  selectedDeficiencies?: string[];
  ageGroup?: string;
  onBack: () => void;
  onNext: (location: string) => void;
}

export default function StepThree({
  selectedDeficiencies = [],
  ageGroup = "",
  onBack,
  onNext,
}: StepThreeProps) {
  const [cep, setCep] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Inicializar mapa quando coordenadas mudarem
  useEffect(() => {
    if (coordinates && mapContainerRef.current) {
      // Destruir mapa anterior se existir
      if (mapRef.current) {
        mapRef.current.remove();
      }

      // Criar novo mapa
      const map = L.map(mapContainerRef.current).setView(
        [coordinates.lat, coordinates.lon],
        15
      );

      // Adicionar camada de tiles do OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Adicionar marcador
      L.marker([coordinates.lat, coordinates.lon])
        .addTo(map)
        .bindPopup("Sua localização")
        .openPopup();

      mapRef.current = map;
    }

    // Cleanup ao desmontar
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordinates]);

  const getCepFromCoordinates = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
      );
      const data = await response.json();

      if (data.address && data.address.postcode) {
        return data.address.postcode.replace("-", "");
      }
      return null;
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      return null;
    }
  };

  const getCoordinatesFromCep = async (cepValue: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${cepValue}&country=Brazil&format=json`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon),
        };
      }
      return null;
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
      return null;
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const loc = `${lat},${lon}`;
          setLocation(loc);
          setCoordinates({ lat, lon });

          const foundCep = await getCepFromCoordinates(lat, lon);
          if (foundCep) {
            setCep(foundCep);
          }
          setLoading(false);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
          setLoading(false);
        }
      );
    }
  };

  const handleCepSearch = async () => {
    if (cep.length >= 8) {
      setLoading(true);
      const coords = await getCoordinatesFromCep(cep);
      if (coords) {
        setCoordinates(coords);
        setLocation(`${coords.lat},${coords.lon}`);
      } else {
        setLocation(cep);
      }
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (location) {
      onNext(location);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Localização</CardTitle>
          <CardDescription>
            Precisamos da sua localização para encontrar o CER mais apropriado
            para você.
          </CardDescription>
          {selectedDeficiencies.length > 0 && (
            <CardDescription className="text-xs">
              Deficiências: {selectedDeficiencies.join(", ")} | Idade:{" "}
              {ageGroup}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleGeolocation}
              className="w-full max-w-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Buscando localização...
                </>
              ) : (
                <>
                  <MapPin className="mr-2 h-4 w-4" />
                  Permitir Localização
                </>
              )}
            </Button>

            <div className="text-muted-foreground text-sm">Ou</div>

            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="cep">Digite seu CEP:</Label>
              <div className="flex gap-2">
                <Input
                  id="cep"
                  type="text"
                  placeholder={cep || "00000-000"}
                  maxLength={9}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
                <Button
                  onClick={handleCepSearch}
                  variant="outline"
                  disabled={loading}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {location && coordinates && (
              <div className="w-full max-w-sm space-y-2">
                <div className="text-sm text-green-600 text-center">
                  ✓ Localização definida {cep && `(CEP: ${cep})`}
                </div>
                {/* Container do mapa Leaflet */}
                <div
                  ref={mapContainerRef}
                  className="w-full h-[300px] rounded-lg border"
                />
              </div>
            )}
          </div>
        </CardContent>

        <CardContent className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button onClick={handleNext} disabled={!location}>
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
