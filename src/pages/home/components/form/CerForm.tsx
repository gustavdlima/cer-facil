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

  const [formData, setFormData] = useState({
    deficiencies: [] as string[],
    ageGroup: "",
    location: "",
  });

  const handleStepOneNext = (selectedDeficiencies: string[]) => {
    setFormData({ ...formData, deficiencies: selectedDeficiencies });
    setCurrentStep(2);
  };

  const handleStepTwoNext = (ageGroup: string) => {
    setFormData({ ...formData, ageGroup });
    setCurrentStep(3);
  };

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

      {currentStep === 1 && (
        <StepOne setShowForm={setShowForm} onNext={handleStepOneNext} />
      )}

      {currentStep === 2 && (
        <StepTwo
          selectedDeficiencies={formData.deficiencies}
          onBack={() => setCurrentStep(1)}
          onNext={handleStepTwoNext}
        />
      )}

      {currentStep === 3 && (
        <StepThree
          selectedDeficiencies={formData.deficiencies}
          ageGroup={formData.ageGroup}
          onBack={() => setCurrentStep(2)}
          onNext={handleStepThreeNext}
        />
      )}

      {currentStep === 4 && (
        <StepFour
          deficiencies={formData.deficiencies}
          ageGroup={formData.ageGroup}
          location={formData.location}
          onBack={() => setCurrentStep(3)}
        />
      )}
    </div>
  );
}
