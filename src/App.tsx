import "./index.css";
import Home from "./pages/home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import PbMap from "./components/pb-map/pb-map";
import MapParaiba from "./components/pb-map/mapparaiba";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <MapParaiba/>
    </>
  );
}

export default App;
