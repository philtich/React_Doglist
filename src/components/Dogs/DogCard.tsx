import React from 'react'

import { dogsType } from '../Main'

type DogCardProps = {
    dog: dogsType;
    deleteById:(id: any) => void
}
export const DogCard = ({
    dog: { dogName, rasseName, id },
    deleteById}: DogCardProps) =>{
  return (
    <div key={id}className='flex justify-center items-center gap-2 flex-col bg-gray-300 p-8 rounded-md'>
            <p className='text-2xl uppercase font-bold'>{dogName}</p>
            <span className='text-gray-600'>{rasseName}</span>
            <button onClick={() => deleteById(id)} className='rounded-full w-8 h-8 p-1 text-sm font-thin'>X</button>
            </div>
  )
}

