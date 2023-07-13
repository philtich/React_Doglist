import React from 'react'
import { dogsType } from '../Main'
import { DogCard } from './DogCard'

type DogviewProps = {
    allDogs: dogsType []
    deleteById:(id: any) => void
}


export const Dogview =({ allDogs, deleteById }: DogviewProps) => {
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6'>
            {allDogs.map((el: dogsType) => (
            <DogCard key={el.id}
            dog={el}
            deleteById={(id: any) => deleteById(id)}
            />
            ))}
        </div>
  )
}
