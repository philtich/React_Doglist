import React from 'react'
import { dogsType } from '../Main'

type DogviewProps = {
    allDogs: dogsType []
}

export const Dogview =({ allDogs }: DogviewProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6'>
            {allDogs.map((el: dogsType) => (
            <div key={el.id}className='flex justify-center items-center gap-2 flex-col bg-gray-300 p-8 rounded-md'>
            <p className='text-2xl uppercase font-bold'>{el.dogName}</p>
            <span className='text-gray-600'>{el.rasseName}</span>
            </div>))}
        </div>
  )
}
