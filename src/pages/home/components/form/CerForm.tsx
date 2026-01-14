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

  return (
    <div id="cer-form" className="container mx-auto p-8">
      <StepIndicator
        currentStep={currentStep}
        totalSteps={4}
        onStepClick={setCurrentStep}
      />

      {currentStep === 1 && (
        <StepOne setShowForm={setShowForm} onNext={() => setCurrentStep(2)} />
      )}
      {currentStep === 2 && (
        <StepTwo
          onBack={() => setCurrentStep(1)}
          onNext={() => setCurrentStep(3)}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          onBack={() => setCurrentStep(2)}
          onNext={() => setCurrentStep(4)}
        />
      )}
      {currentStep === 4 && <StepFour onBack={() => setCurrentStep(3)} />}
    </div>
  );
}
