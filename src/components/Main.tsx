import React from 'react'
import { v4 as uuid } from 'uuid';
import { useState } from 'react'
import { Dogview } from './Dogs/Dogview';
import { Form } from './Form';

export type dogsType = {
    id: any,
    dogName: string,
    rasseName: string
}

export const Main = () => {
   
   const [dogs, setDogs] = useState([
    { id:  uuid(), dogName: "Harald", rasseName: "Labrador" },
    { id:  uuid(), dogName: "Speedy", rasseName: "Dackel" },
    { id:  uuid(), dogName: "Sammy", rasseName: "Labrador" },
])
const deleteById = (id:any) => {

    const newDogArray = dogs.filter((dog: dogsType) => dog.id !== id);
        setDogs(newDogArray)
  }
      
  return (
    
    <section className='container py-8'>
        <Form   setDogs = {(arr: dogsType[]) => setDogs(arr)}
                allDogs={dogs}
                />
        <Dogview allDogs={dogs}
                 deleteById={(id: any) => deleteById(id)}/>
    </section>
  )
}
