import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correção dos ícones padrão do Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

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

  // Estilo padrão (Azul)
  const estiloPadrao = {
    fillColor: '#3498db',
    weight: 1,
    opacity: 1,
    color: 'white', // Borda branca fina
    fillOpacity: 1
  };

  // --- A MÁGICA ACONTECE AQUI ---
  // Função que roda para CADA cidade (feature) do mapa
  const onEachCity = (feature, layer) => {
    // Tenta pegar o nome da cidade (pode variar dependendo do JSON)
    const nomeCidade = feature.properties.name || feature.properties.NM_MUN || "Cidade Desconhecida";

    layer.on({
      // 1. Ao clicar na cidade
      click: (event) => {
        //alert(`Você clicou em: ${nomeCidade}`);
        // Aqui você pode colocar lógica para abrir um modal, navegar para outra página, etc.
        console.log("Dados da cidade:", feature.properties); 
      },

      // 2. Ao passar o mouse (Destaque)
      mouseover: (event) => {
        event.target.setStyle({
          weight: 3,
          color: '#f1c40f', // Borda Amarela
          fillOpacity: 0.8
        });
        event.target.bringToFront(); // Traz a cidade para frente para a borda não ficar escondida
      },

      // 3. Ao tirar o mouse (Volta ao normal)
      mouseout: (event) => {
        event.target.setStyle(estiloPadrao); // Reseta para o estilo original
      }
    });

    // Adiciona uma etiqueta simples (Tooltip) que aparece ao passar o mouse
    layer.bindTooltip(nomeCidade, { sticky: true });

    const popupContent = `
    <div style="font-family: sans-serif;">
      <h4 style="margin: 0 0 5px 0; color: #2c3e50;">${nomeCidade}</h4>
      <p style="margin: 0; font-size: 14px;">
        <strong>População:</strong> hfhifofrrhrr
      </p>
      <hr />
      <button onclick="console.log('Clicou em hdfhvihighfibhigehieh')" 
              style="cursor:pointer; background:#3498db; color:white; border:none; padding:5px 10px; border-radius:3px;">
        Ver detalhes
      </button>
    </div>
  `;

  // 3. Vinculamos o Popup à camada (município)
  layer.bindPopup(popupContent, {
    maxWidth: 250,      // Largura máxima da janelinha
    className: 'custom-popup' // Você pode usar isso para estilizar no seu CSS
  });


  };

  return (
    <div style={{ height: '500px', width: '100%', background: '#f4f4f4', borderRadius: '8px' }}>
      <MapContainer 
        center={position} 
        zoom={zoomLevel} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%', background: 'transparent' }} 
      >
        
        {/* GeoJSON com a interatividade adicionada */}
        {geoData && (
          <GeoJSON 
            data={geoData} 
            style={estiloPadrao} 
            onEachFeature={onEachCity} // <--- Aqui conectamos a função de clique
          />
        )}

        {/* Marcadores extras (opcionais) */}
        <Marker position={[-7.115, -34.863]}>
          <Popup>João Pessoa</Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapParaiba;