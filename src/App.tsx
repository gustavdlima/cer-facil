import "./index.css";
import Home from "./pages/home/components/Home";
import { Navbar } from "./components/Navbar/Navbar";
import PbMap from "./components/pb-map/pb-map";
import MapParaiba from "./components/pb-map/mapparaiba";
import MapCaptions from "./components/pb-map/mapcaptions";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
       <MapParaiba/>
       <MapCaptions/>
    </>
  );
}

export default App;
