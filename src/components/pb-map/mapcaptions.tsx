import { MACROS_PB } from './macros/data';
import { CORES_REGIOES } from './macros/data';

function MapCaptions() {
  return (
    <div className='grid grid-cols-8 p-10' style={{background:'#f4f4f4'}}>
      {Object.entries(MACROS_PB).map(([macroId, macroObj]) =>
        Object.entries(macroObj).map(([regiaoId, regiaoObj]) => (
          <div key={`${macroId}-${regiaoId}`} className='col-span-1 flex items-center scale-80'>
            
            <div
              className='w-4 h-4 rounded-sm align-middle flex-shrink-0'
              style={{ backgroundColor: CORES_REGIOES[parseInt(regiaoId) - 1] }}
            />

            <h1
              style={{
                padding: '12px',
                borderRadius: '8px',
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              {regiaoObj.nome}
            </h1>
          </div>
        ))
      )}
    </div>
  );
}

export default MapCaptions;
