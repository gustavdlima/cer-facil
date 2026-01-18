import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { featureGroup } from "leaflet";
// Fix Leaflet default icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MACROS_PB } from "./macros/data";
import { CORES_REGIOES } from "./macros/data";
import { dadosCers } from "../dadosCers/dadosCers.js";
import { useNavigate } from "react-router-dom";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapParaiba = () => {
  const position = [-7.15, -36.5]; // Center of Paraíba
  const zoomLevel = 8;
  const [geoData, setGeoData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //click navigation handler
    window.navegarParaCer = (id) => {
      navigate(`/detalhes/${id}`);
    };

    return () => {
      delete window.navegarParaCer;
    };
  }, [navigate]);

  //Load Paraíba map GeoJSON data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-25-mun.json",
    )
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Erro ao carregar mapa:", err));
  }, []);

  // Color region style based on MACROS_PB
  const aplicarEstilo = (feature, layer) => {
    const nomeCidade =
      feature.properties.name ||
      feature.properties.NM_MUN ||
      "Cidade Desconhecida";

    for (const macroRegioes in MACROS_PB) {
      const macro = MACROS_PB[macroRegioes];

      for (const key in macro) {
        if (macro[key]["municipios"].includes(nomeCidade)) {
          return {
            fillColor: CORES_REGIOES[key - 1],
            weight: 1,
            opacity: 1,
            color: "white",
            fillOpacity: 1,
          };
        }
      }
    }
  };

  // Funcion to handle city interactions
  const onEachCity = (feature, layer) => {
    const nameCity =
      feature.properties.name ||
      feature.properties.NM_MUN ||
      "Cidade Desconhecida";

    layer.on({
      click: (event) => {},

      // 2. Mouse over
      mouseover: (event) => {
        event.target.setStyle({
          weight: 3,
          color: "#f1c40f", // Yellow border
          fillOpacity: 0.8,
        });
        event.target.bringToFront(); // featured city
      },

      // normalize style on mouse out
      mouseout: (event) => {
        event.target.setStyle({
          weight: 1,
          opacity: 1,
          color: "white",
          fillOpacity: 1,
        }); // normalize style
      },
    });

    // Adds a simple tooltip that appears on hover
    layer.bindTooltip(nameCity, { sticky: true });
    // // Adds a popup that appears when the city is clicked
    const CersCity = dadosCers.filter((cer) => cer.cidade === nameCity);
    let popupContent = "";
    if (CersCity.length > 0) {
      const listaCersHtml = CersCity.map(
        (cer) => `
        <div 
          onclick="window.navegarParaCer('${cer.id}')"
          style="
            display: block;
            margin-bottom: 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 8px;
            transition: background-color 0.3s;
            cursor: pointer;
            background-color: white; 
          "
          onmouseover="this.style.backgroundColor='#f0f0f0';"
          onmouseout="this.style.backgroundColor='white';"
        >
          <strong style="color: black; font-size: 15px;">
            ${cer.nome}
          </strong><br/>

          <div style="font-size: 12px; color: #666; margin-bottom: 4px;">
            ${cer.cidade || "Cidade não disponível"}
          </div>
          
          <div style="font-size: 12px; color: #555; font-style: italic;">
            ${cer.especialidades}
          </div>
          
          <div style="margin-top: 8px; font-size: 11px; text-align: right; color: #007bff;">
            Ver detalhes &rarr;
          </div>
        </div>
      `,
      ).join("");

      popupContent = `
        <div style="font-size: 14px; max-height: 250px; overflow-y: auto;">
          ${listaCersHtml}
        </div>`;
      layer.bindPopup(popupContent);
    } else {
      // If no CER is found
      popupContent = `
        <div style="font-size: 14px;">
          <strong>${nameCity}</strong><br/>
          <em>Não há Centro de Reabilitação Especializado listado.</em>
        </div>`;
      layer.bindPopup(popupContent);
    }
  };

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        background: "#f4f4f4",
        borderRadius: "8px",
      }}
    >
      <MapContainer
        center={position}
        zoom={zoomLevel}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", background: "transparent" }}
      >
        {/* GeoJSON com a interatividade adicionada */}
        {geoData && (
          <GeoJSON
            data={geoData}
            style={aplicarEstilo}
            onEachFeature={onEachCity} //function click handler
          />
        )}

        {/*Cities that have the cer*/}
        <Marker position={[-7.115, -34.863]}>
          <Popup>João Pessoa</Popup>
        </Marker>
        <Marker position={[-7.224955, -35.896587]}>
          <Popup>Campina Grande</Popup>
        </Marker>
        <Marker position={[-6.768997, -38.230878]}>
          <Popup>Sousa</Popup>
        </Marker>
        <Marker position={[-7.020719, -37.278748]}>
          <Popup>Patos</Popup>
        </Marker>
        <Marker position={[-7.262097, -34.912868]}>
          <Popup>Conde</Popup>
        </Marker>
        <Marker position={[-6.854207, -35.476743]}>
          <Popup>Guarabira</Popup>
        </Marker>
        <Marker position={[-6.531348, -35.741093]}>
          <Popup>Araruna</Popup>
        </Marker>
        <Marker position={[-7.894509, -37.123576]}>
          <Popup>Monteiro</Popup>
        </Marker>
        <Marker position={[-7.197234, -37.92444]}>
          <Popup>Piancó</Popup>
        </Marker>
        <Marker position={[-6.342879, -37.748187]}>
          <Popup>Catolé do Rocha</Popup>
        </Marker>
        <Marker position={[-7.735527, -37.992131]}>
          <Popup>Princesa Isabel</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapParaiba;
