import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

interface CerFormProps {
  setShowForm: (show: boolean) => void;
}

export default function CerForm({ setShowForm }: CerFormProps) {
  return (
    <div id="cer-form" className="container mx-auto p-8">
      <StepOne setShowForm={setShowForm} />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
}
