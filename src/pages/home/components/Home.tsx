import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CersCards from "./cers-cards/CersCards";
import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";

export default function Home() {
  return (
    <div>
      <Welcome />
      <NetworkInfo />
      <CersCards />
    </div>
  );
}
