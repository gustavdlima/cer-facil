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

export default function CerForm() {
  return (
    <Card>
      <CardContent>
        <div id="cer-form" className="container mx-auto p-8">
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
        </div>
      </CardContent>
    </Card>
  );
}
