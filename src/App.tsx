import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";
import { Navbar } from "./components/navbar/Navbar";

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFlow, setShowFlow] = useState<[boolean, number | null]>([
    false,
    null,
  ]);

  return (
    <>
      {/* A Navbar só aparece se:
         1. O formulário não estiver aberto (!showForm)
         2. E o fluxo de detalhes não estiver ativo (!showFlow[0])
      */}
      {!showForm && !showFlow[0] && <Navbar />}

      <Home
        showForm={showForm}
        setShowForm={setShowForm}
        showFlow={showFlow}
        setShowFlow={setShowFlow}
      />
    </>
  );
}
