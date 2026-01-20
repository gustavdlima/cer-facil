import MICROS_PB from '../../data/micro.json';
import CORES_REGIOES from '../../data/colors.json';

function MapCaptions() {
  return (
    <div className='flex justify-end w-full pr-10 pb-10'>
      <div className='grid grid-cols-3 gap-x-6 gap-y-2 w-fit'>
        {MICROS_PB.map((regiao) => {
          const corObj = CORES_REGIOES[regiao.id - 1];
          return (
            <div 
              key={regiao.id} 
              className='flex items-center justify-end gap-2'
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#333',
                  whiteSpace: 'nowrap'
                }}
              >
                {regiao.regiao}
              </span>
              
              <div
                className='w-3 h-3 rounded-[2px] flex-shrink-0 opacity-90'
                style={{ 
                  backgroundColor: corObj ? corObj.hex : '#CCCCCC' 
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapCaptions;