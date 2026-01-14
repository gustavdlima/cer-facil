interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8 gap-4">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <button
            onClick={() => onStepClick(step)}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold transition-all ${
              currentStep === step
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted-foreground text-muted-foreground hover:border-primary"
            }`}
          >
            {step}
          </button>
          {step < totalSteps && (
            <div
              className={`w-16 h-0.5 ${
                currentStep > step ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
