import React from 'react'
import { v4 as uuid } from 'uuid';
import { useState } from 'react'
import { Dogview } from './Dogs/Dogview';
import { Form } from './Form';

export type dogsType = {
    id: any
    dogName: string,
    rasseName: string
}

export const Main = () => {
    //store dogs
      const [dogs, setDogs] = useState([
        { id:  uuid(), dogName: "Harald", rasseName: "Labrador" },
        { id:  uuid(), dogName: "Speedy", rasseName: "Dackel" },
        { id:  uuid(), dogName: "Sammy", rasseName: "Labrador" },
    ])

    const handleClick = (event: any) => {
        event.preventDefault();
        const dog = {
            id:  uuid(),
            dogName: dogName,
            rasseName: rasseName
        }

        setDogs([...dogs, dog])

        console.log(dog);
        console.log(dogs)
    }

    const [dogName, setDogName] = useState("")
    
    const handleChangeOne = (event: any) => {
         setDogName(event.target.value)
    }

    const [rasseName, setRasseName] = useState("")

    const handleChangeTwo = (event:any) => {
        setRasseName(event.target.value)   
    }
    const handleDelete = (id:any) => {
        setDogs(oldDogs => {
          return oldDogs.filter(dog => dog.id !== id)
        })
      }
      

    
  return (
    
    <section className='container py-8'>
        <Form setDogName={(dogName:string) => setDogName(dogName)}
                setRasseName={(rasseName: string) => setRasseName(rasseName)}
                allDogs={dogs}
                handleClick={handleClick}
                />

        <Dogview allDogs={dogs}/>
    </section>
  )
}
