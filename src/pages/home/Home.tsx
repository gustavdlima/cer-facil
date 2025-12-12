import CersCards from "./components/cers-cards/CersCards";
import NetworkInfo from "./components/network-info/NetworkInfo";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <NetworkInfo />
      <CersCards />
    </div>
  );
}
