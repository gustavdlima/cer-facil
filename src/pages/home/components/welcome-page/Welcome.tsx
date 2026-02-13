import { Button } from "@/components/ui/button";
import CerForm from "../form/CerForm";
import { ChevronDown } from "lucide-react";

interface WelcomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Welcome({ showForm, setShowForm }: WelcomeProps) {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  if (showForm) {
    return <CerForm setShowForm={setShowForm} />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 relative">
      {/* TÍTULO PRINCIPAL DESTACADO */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
          Conectamos pessoas com deficiência aos{" "}
          <span className="text-[var(--cor-3)]">Centros de Reabilitação</span>
        </h1>
      </div>

      {/* TEXTO E BOTÕES */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <p className="text-muted-foreground leading-relaxed text-lg">
          Seja bem-vindo ao CER Fácil. Aplicação voltada a facilitar o
          conhecimento e acesso aos Centros de Reabilitação (CERs)
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" onClick={() => setShowForm(true)}>
            Começar busca
          </Button>
          <Button size="lg" variant="outline" onClick={handleScrollDown}>
            Conheça a rede
          </Button>
        </div>
      </div>

      {/* DESLIZE PARA MAIS */}
      <div
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <p className="text-sm font-medium animate-bounce">Deslize para mais</p>
        <ChevronDown className="animate-bounce group-hover:scale-110 transition-transform" />
      </div>
    </main>
  );
}
