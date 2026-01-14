import "./index.css";
import Home from "./pages/home/components/Home";
import { Navbar } from "./components/Navbar/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
