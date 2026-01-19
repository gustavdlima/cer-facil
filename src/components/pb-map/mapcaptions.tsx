import { MACROS_PB } from './macros/data';
import { CORES_REGIOES } from './macros/data';

function MapCaptions() {
  return (
    <div className='flex justify-end w-full pr-10 pb-10 pr-15'>
      <div className='grid grid-cols-3 gap-x-8 gap-y-2 w-fit'>
        {Object.entries(MACROS_PB).flatMap(([macroId, macroObj]) =>
          Object.entries(macroObj).map(([regiaoId, regiaoObj]) => (
            <div 
              key={`${macroId}-${regiaoId}`} 
              className='flex items-center justify-end gap-2 scale-90 origin-right'
            >
              <span
                style={{
                  fontSize: '14px',
                  color: 'black',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}
              >
                {regiaoObj.nome}
              </span>
              <div
                className='w-3 h-3 rounded-sm flex-shrink-0'
                style={{ backgroundColor: CORES_REGIOES[parseInt(regiaoId) - 1] }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MapCaptions;