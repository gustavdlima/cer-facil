import { useState } from "react";
import "./index.css";
import Home from "./pages/home/components/Home";
import { Navbar } from "./components/Navbar/Navbar";
import MapParaiba from "./components/pb-map/mapparaiba";
import MapCaptions from "./components/pb-map/mapcaptions";

interface HomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Home({ showForm, setShowForm }: HomeProps) {
  return (
    <>
      {!showForm && <Navbar />}
      <Home showForm={showForm} setShowForm={setShowForm} />
      {!showForm && (
        <>
          <MapParaiba />
          <MapCaptions />
        </>
      )}
    </>
  );
}

export default App;