import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { featureGroup } from 'leaflet';

// Correção dos ícones padrão do Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MACROS_PB } from './macros/data';
import { CORES_REGIOES } from './macros/data';
import { dadosCers } from '../dadosCers/dadosCers.js';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapParaiba = () => {
  const position = [-7.15, -36.5]; // Centralizei melhor visualmente
  const zoomLevel = 8;
  const [geoData, setGeoData] = useState(null);

  // Busca os dados do mapa
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-25-mun.json')
      .then(response => response.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Erro ao carregar mapa:", err));
  }, []);
  
  // Aplicar o estilo de acordo com a região
  const aplicarEstilo = (feature, layer) => {
    const nomeCidade = feature.properties.name || feature.properties.NM_MUN || "Cidade Desconhecida";

    for (const macroRegioes in MACROS_PB) {
      const macro = MACROS_PB[macroRegioes];

      for (const key in macro) {
        if (macro[key]["municipios"].includes(nomeCidade)) {
          return ({
            fillColor: CORES_REGIOES[key - 1],
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 1
          })
        }
      }
    }
  };

  // --- A MÁGICA ACONTECE AQUI ---
  // Função que roda para CADA cidade (feature) do mapa
  const onEachCity = (feature, layer) => {
    // Tenta pegar o nome da cidade (pode variar dependendo do JSON)
    const nameCity = feature.properties.name || feature.properties.NM_MUN || "Cidade Desconhecida";

    layer.on({
      // 1. Ao clicar na cidade
      click: (event) => {
        //alert(`Você clicou em: ${nomeCidade}`);
        // Aqui você pode colocar lógica para abrir um modal, navegar para outra página, etc.
        //console.log("Dados da cidade:", feature.properties);
      },

      // 2. Mouse over 
      mouseover: (event) => {
        event.target.setStyle({
          weight: 3,
          color: '#f1c40f', // Yellow border
          fillOpacity: 0.8
        });
        event.target.bringToFront(); // featured city
      },

      // 3. Ao tirar o mouse (Volta ao normal)
      mouseout: (event) => {
        event.target.setStyle({
          weight: 1,
          opacity: 1,
          color: 'white',
          fillOpacity: 1
        }); // Reseta para o estilo original
      }
    });

    // Adiciona uma etiqueta simples (Tooltip) que aparece ao passar o mouse
  layer.bindTooltip(nameCity, { sticky: true }); 
  const municipiosComCer = ["João Pessoa", "Campina Grande", "Sousa", "Patos", "Conde", "Guarabira", "Araruna", "Monteiro", "Piancó", "Catolé do Rocha", "Cajazeiras", "Serra Branca", "Princesa Isabel"];
  
  let popupContent = "";

  if (municipiosComCer.includes(nameCity)) {
    popupContent = `
              <div style="font-size: 14px;">
                <strong>${nameCity}</strong><br/>
                <em>Este é o município destaque! (Com CER)</em>
              </div>`;
    layer.bindPopup(popupContent);
  } else {
    popupContent = `
            <div style="font-size: 14px;">
              <strong>${nameCity}</strong><br/>
              <em>Não há Centro de Reabilitação Especializado.</em>
            </div>`;
    layer.bindPopup(popupContent);
  }

  
  }

  return (
    <div style={{ height: '500px', width: '100%', background: '#f4f4f4', borderRadius: '8px' }}>
      <MapContainer
        center={position}
        zoom={zoomLevel}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', background: 'transparent' }}>

        {/* GeoJSON com a interatividade adicionada */}
        {geoData && (
          <GeoJSON
            data={geoData}
            style={aplicarEstilo}
            onEachFeature={onEachCity} // <--- Aqui conectamos a função de clique
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
          <Marker position={[-7.197234, -37.924440]}>
          <Popup>Piancó</Popup> 
        </Marker>
          <Marker position={[-6.342879, -37.748187]}>
          <Popup>Catolé do Rocha</Popup> 
        </Marker>
          <Marker position={[-6.889504, -38.556146]}>
          <Popup>Cajazeiras</Popup> 
        </Marker>
          <Marker position={[-7.484412, -36.662841]}>
          <Popup>Serra Branca</Popup> 
        </Marker>
          <Marker position={[-7.735527, -37.992131]}>
          <Popup>Princesa Isabel</Popup> 
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapParaiba;