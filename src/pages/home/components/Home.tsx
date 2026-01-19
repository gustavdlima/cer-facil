import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CersCards from "./cers-cards/CersCards";
import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";
import MapParaiba from "@/components/pb-map/mapparaiba";

export default function Home() {
  return (
    <div>
      <MapParaiba/>
      <Welcome />
      {/*<NetworkInfo />*/}
      {/*<CersCards />*/}
    </div>
  );
}
