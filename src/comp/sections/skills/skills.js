import { useEffect, useState } from "react"

function Skills({ item }) {

    const [iconStyle, setIconStyle] = useState("#76ABAE");

    useEffect(() => {
      
      const glowingIcon =   setInterval(() => {
          setIconStyle(prevState => (prevState === "#76ABAE" ? '#23f4ff' : '#76ABAE'));
      }, 1000);
        
        return (() => clearInterval(glowingIcon));
    } , [])

    return (
        <div>
            <div className='flex flex-col gap-4 border border-solid p-6 rounded-xl border-[#76ABAE] lg:h-[448px] h-auto shadow-inner hover:-translate-y-1 shadow-[#23f4ff] transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-[#76ABAE]' >
                <div
                    className='text-5xl duration-1000 ease-in-out '
                    style={ 
                       { color : iconStyle} 
                    } >
                    {item.icon}
                </div>

                <div className='text-2xl font-semibold'>
                    {item.title}
                </div>

                <div className='text-[10px]'>
                    {item.desc}
                </div>

            </div>
        </div>
    )
}

export default Skills
