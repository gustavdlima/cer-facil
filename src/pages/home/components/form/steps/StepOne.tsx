import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Accessibility, Ear, Eye, Brain, Puzzle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepOneProps {
  setShowForm: (show: boolean) => void;
  onNext: (selectedDeficiencies: string[]) => void;
}

export default function StepOne({ setShowForm, onNext }: StepOneProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      onNext(selected);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Qual deficiência(s) deseja buscar atendimento?</CardTitle>
          <CardDescription>
            Você pode selecionar mais de uma opção
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <Card
            onClick={() => toggleSelection("fisica")}
            className={`cursor-pointer transition-all ${
              selected.includes("fisica")
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Accessibility className="h-8 w-8 text-primary" />
              <CardTitle>Deficiência física</CardTitle>
            </CardHeader>
          </Card>

          <Card
            onClick={() => toggleSelection("auditiva")}
            className={`cursor-pointer transition-all ${
              selected.includes("auditiva")
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Ear className="h-8 w-8 text-primary" />
              <CardTitle>Deficiência Auditiva</CardTitle>
            </CardHeader>
          </Card>

          <Card
            onClick={() => toggleSelection("visual")}
            className={`cursor-pointer transition-all ${
              selected.includes("visual")
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Eye className="h-8 w-8 text-primary" />
              <CardTitle>Deficiência Visual</CardTitle>
            </CardHeader>
          </Card>

          <Card
            onClick={() => toggleSelection("intelectual")}
            className={`cursor-pointer transition-all ${
              selected.includes("intelectual")
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Brain className="h-8 w-8 text-primary" />
              <CardTitle>Deficiência Intelectual</CardTitle>
            </CardHeader>
          </Card>

          <Card
            onClick={() => toggleSelection("tea")}
            className={`cursor-pointer transition-all ${
              selected.includes("tea")
                ? "border-primary border-2 bg-primary/5"
                : "hover:border-primary/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Puzzle className="h-8 w-8 text-primary" />
              <CardTitle>Transtorno espectro autista (TEA)</CardTitle>
            </CardHeader>
          </Card>
        </CardContent>

        <CardContent className="flex justify-between">
          <Button variant="outline" onClick={() => setShowForm(false)}>
            Voltar
          </Button>
          <Button onClick={handleNext} disabled={selected.length === 0}>
            Próximo ({selected.length})
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
