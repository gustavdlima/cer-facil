import React, { useState } from 'react';
import { MapContainer, Marker, Popup, GeoJSON } from 'react-leaflet';
import MapCaptions from './mapcaptions.js';
import 'leaflet/dist/leaflet.css';
import MICROS_PB from '../../data/micro.json';
import CORES_REGIOES from '../../data/colors.json';
import CERS from '../../data/cers.json';
import { useEffect } from 'react';

const MapParaiba = () => {
  const position = [-7.15, -36.5];
  const zoomLevel = 8;
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-25-mun.json')
      .then(response => response.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Erro ao carregar mapa:", err));
  }, []);

  const aplicarEstilo = (feature, layer) => {
  const nomeCidade = feature.properties.name || feature.properties.NM_MUN || "Cidade Desconhecida";
    for (const regiao of MICROS_PB) {
      if (regiao.municipios.includes(nomeCidade)) {
        const corSelecionada = CORES_REGIOES[regiao.id - 1]?.hex || "#808080";
        return {
          fillColor: corSelecionada,
          weight: 1,
          opacity: 1,
          color: 'white',
          fillOpacity: 1
        };
      }
    }
  };

  const onEachCity = (feature, layer) => {
    const nameCity = feature.properties.name || feature.properties.NM_MUN || "Cidade Desconhecida";

    layer.bindTooltip(nameCity, { sticky: true });
    const CersCity = CERS.filter(cer => cer.cidade === nameCity);
    let popupContent = "";
    if (CersCity.length > 0) {
      const listaCersHtml = CersCity.map(cer => `
        <div 
          "
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
            ${cer.cidade || 'Cidade não disponível'}
          </div>
          
          <div style="font-size: 12px; color: #555; font-style: italic;">
            ${cer.especialidades}
          </div>
          
          <div style="margin-top: 8px; font-size: 11px; text-align: right; color: #007bff;" onclick="document.getElementById('${cer.id}').scrollIntoView({ behavior: 'smooth' })">
            Ver detalhes &rarr;
          </div>
        </div>
      `).join('');

      popupContent = `
        <div style="font-size: 14px; max-height: 250px; overflow-y: auto;">
          ${listaCersHtml}
        </div>`;
      layer.bindPopup(popupContent);
    } else {
      popupContent = `
        <div style="font-size: 14px;">
          <strong>${nameCity}</strong><br/>
          <em>Não há Centro de Reabilitação Especializado listado.</em>
        </div>`;
      layer.bindPopup(popupContent);
    }
  }

  return (
    <div style={{background:'#f4f4f4'}} className='w-screen h-screen justify-center items-center flex flex-col pt-10'>
      <div style={{ height: '500px', width: '100%', borderRadius: '8px' }}>
        <MapContainer
          center={position}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', background: 'transparent' }}
          zoomControl={false}        
          doubleClickZoom={false}    
          scrollWheelZoom={false}    
          boxZoom={false}            
          touchZoom={false}         
          dragging={false}     
          keyboard={false}>

          {geoData && (
            <GeoJSON
              data={geoData}
              style={aplicarEstilo}
              onEachFeature={onEachCity}
            />
          )}

          {/*Cities that have the cer*/}
          {CERS.map((cer) => (
            <Marker 
              key={cer.id} 
              position={[cer.localizacao.latitude, cer.localizacao.longitude]}
            >
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>{cer.nome}</strong><br />
                  <span style={{ fontSize: '12px' }}>{cer.cidade}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <MapCaptions />
    </div>
  );
};

export default MapParaiba;