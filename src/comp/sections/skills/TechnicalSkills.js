import React, { useEffect, useState } from 'react'

function TechnicalSkills({ item }) {
    
    const [size, setSize] = useState(false);

    useEffect(() => {

      const twinkleIcon = setInterval(() => {
          setSize(prev => !prev);
        } , 1000)


        return ( ()=> {clearInterval(twinkleIcon)})
        
    } , [])


  return (
      <div className='flex flex-col container gap-1'>
          <div  >
              <img
                  src={item.icon}
                  alt={item.language}
                  className='w-7 duration-500 ease-in-out'
                  style={
                      {
                          scale: size ? '110%' : '100%',
                          translate: size ? '0px -2px' : '0',
                      }
                  }
              />
          </div>

          <div className='flex justify-between '>
              <div> 
              {item.language}
              </div>

              <div>
                  {item.perc}%
              </div>

              </div>
              <div className='h-1 rounded-2xl w-full bg-white -z-10 '>
                  <div
                      className=' h-1 bg-[#08a6af] z-20 '
                      style={{
                          width : `${item.perc}%`
                      }}
                  >   
                  </div>
          </div>
      
    </div>
  )
}

export default TechnicalSkills;
