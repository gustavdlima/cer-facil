import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Accessibility, Ear, Eye, Brain, Puzzle } from "lucide-react";
import FLUXOS from "../../../../data/fluxo.json";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FlowProps {
  setShowFlow: (show: [boolean, number]) => void;
}

export default function Flow({ setShowFlow, cerId }: FlowProps) {
  const [selected, setSelected] = useState(false)

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <Card className=" h-screen flex items-center justify-center p-12 space-y-15">
        <CardHeader className="w-screen">
          <CardTitle>{FLUXOS[cerId - 1].title}</CardTitle>
          <CardContent className="overflow-y-auto p-6">
          
          <div className="ml-2"> 
            {FLUXOS[cerId - 1].steps.map((step, index) => (
              <div key={index} className="relative border-l-2 border-gray-200 pl-8 pb-8 last:border-0">          
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
                <h3 className="font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {(step as any).description || "Siga as instruções desta etapa."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h4 className="font-bold text-sm mb-2">Documentos Necessários:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {FLUXOS[cerId - 1].documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        </CardHeader>
        <Button className="bottom-5" onClick={() => setShowFlow([false, 0])}>Voltar</Button>
      </Card>
    </div>
  );
}
