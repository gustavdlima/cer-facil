import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";
import { Navbar } from "./components/Navbar/Navbar";

export function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {!showForm && <Navbar />}
      <Home showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}

export default App;

/*

Namoral, 
decora, anota, aprende... isso aí, deu trabalho bolar isso

App.tsx
├── showForm = false (estado vive aqui)
├── {!showForm && <Navbar />}  → !false = true → Navbar APARECE
└── <Home showForm={false} setShowForm={função}>
    ├── <Welcome showForm={false} setShowForm={função}>
    │   └── if (showForm) → false → NÃO mostra CerForm
    │   └── Mostra card de boas-vindas
    └── {!showForm && ...}  → !false = true → NetworkInfo e CersCards APARECEM
*/
