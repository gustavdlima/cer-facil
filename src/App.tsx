import "./index.css";
import Home from "./pages/home/Home";
import NetworkInfo from "./pages/home/NetworkInfo";
import CersCards from "./pages/home/CersCards";


export function App() {
  return (
    <>
      <Home />
      <CersCards />
      <NetworkInfo />
    </>
  );
}

export default App;
