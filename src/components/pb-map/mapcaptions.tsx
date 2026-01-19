import { MACROS_PB } from './macros/data';
import { CORES_REGIOES } from './macros/data';

function MapCaptions() {
  return (
    <div className='flex justify-end w-full pr-10 pb-10 pr-15'>
      <div className='grid grid-cols-3 gap-x-6 gap-y-1 w-fit'>
        {Object.entries(MACROS_PB).flatMap(([macroId, macroObj]) =>
          Object.entries(macroObj).map(([regiaoId, regiaoObj]) => (
            <div 
              key={`${macroId}-${regiaoId}`} 
              className='flex items-center justify-end gap-2'
            >
              <span
                style={{
                  fontSize: '14px',
                  color: 'black',
                  //fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}
              >
                {regiaoObj.nome}
              </span>
              <div
                className='w-2.5 h-2.5 rounded-[2px] flex-shrink-0 opacity-90'
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