import "../../../index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MapParaiba from "@/components/pb-map/mapparaiba";
import NetworkInfo from "./network-info/NetworkInfo";

// Component that defines the main routes of the application
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/network-info" element={<NetworkInfo />} />
        </Routes>
    );
}
export default MainRoutes;