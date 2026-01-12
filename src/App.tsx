import "./index.css";
import Home from "./pages/home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import PbMap from "./components/pb-map/pb-map";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PbMap />
    </>
  );
}

export default App;
