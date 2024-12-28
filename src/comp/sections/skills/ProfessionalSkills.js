import React from 'react'
import { Circle } from 'rc-progress';

function ProfessionalSkills({item}) {
  return (
    <div className='flex flex-col justify-center items-center gap-3' >
      <div className='relative' >
        <div className=' w-20 lg:w-40 '>
          <Circle percent={item.perc} strokeWidth={6} trailWidth={6} strokeColor='#08a6af' trailColor='#31363F' />
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-xl font-semibold'>
         {item.perc}%
        </div>
      </div>

      <p className='text-xl'>{item.name}</p>
    </div>
  )
}

export default ProfessionalSkills;
