import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepIndicator from "./step-indicator/StepIndicator";

interface CerFormProps {
  setShowForm: (show: boolean) => void;
}

export default function CerForm({ setShowForm }: CerFormProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // ========================================================================
  // ESTADO DO FORMULÁRIO - Armazena TODOS os dados coletados
  // ========================================================================
  // Este objeto guarda as informações de todos os steps do formulário
  // Cada propriedade armazena dados de um step específico
  const [formData, setFormData] = useState({
    deficiencies: [] as string[],  // Step 1: Array com deficiências selecionadas
    ageGroup: "",                   // Step 2: String com faixa etária
    location: "",                   // Step 3: String com CEP ou coordenadas
  });

  // ========================================================================
  // HANDLERS - Funções que atualizam o estado quando o usuário avança
  // ========================================================================
  
  // Chamada quando o usuário completa o Step 1
  // Recebe as deficiências selecionadas e salva no estado
  const handleStepOneNext = (selectedDeficiencies: string[]) => {
    setFormData({ ...formData, deficiencies: selectedDeficiencies });
    setCurrentStep(2);
  };

  // Chamada quando o usuário completa o Step 2
  // Recebe a faixa etária e salva no estado
  const handleStepTwoNext = (ageGroup: string) => {
    setFormData({ ...formData, ageGroup });
    setCurrentStep(3);
  };

  // Chamada quando o usuário completa o Step 3
  // Recebe a localização e salva no estado
  const handleStepThreeNext = (location: string) => {
    setFormData({ ...formData, location });
    setCurrentStep(4);
  };

  return (
    <div id="cer-form" className="container mx-auto p-8">
      <StepIndicator
        currentStep={currentStep}
        totalSteps={4}
        onStepClick={setCurrentStep}
      />

      {/* Step 1: Seleção de deficiências */}
      {currentStep === 1 && (
        <StepOne setShowForm={setShowForm} onNext={handleStepOneNext} />
      )}
      
      {/* Step 2: Seleção de faixa etária */}
      {currentStep === 2 && (
        <StepTwo
          selectedDeficiencies={formData.deficiencies}
          onBack={() => setCurrentStep(1)}
          onNext={handleStepTwoNext}
        />
      )}
      
      {/* Step 3: Seleção de localização */}
      {currentStep === 3 && (
        <StepThree
          selectedDeficiencies={formData.deficiencies}
          ageGroup={formData.ageGroup}
          onBack={() => setCurrentStep(2)}
          onNext={handleStepThreeNext}
        />
      )}
      
      {/* Step 4: Resultados - RECEBE TODOS OS DADOS COLETADOS */}
      {currentStep === 4 && (
        <StepFour 
          deficiencies={formData.deficiencies}  // Passa as deficiências
          ageGroup={formData.ageGroup}          // Passa a faixa etária
          location={formData.location}          // Passa a localização
          onBack={() => setCurrentStep(3)} 
        />
      )}
    </div>
  );
}
