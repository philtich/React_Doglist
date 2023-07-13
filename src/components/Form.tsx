import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { dogsType } from './Main';

type FormProps = {
    allDogs: dogsType[]
    setDogs: (arr: dogsType[]) => void
}

export const Form = ({ allDogs, setDogs }: FormProps) => {
    const [dogName, setDogName] = useState("")
    const [rasseName, setRasseName] = useState("")
    const handleClick = (event: any) => {
        event.preventDefault();
        const dog = {
            id:  uuid(),
            dogName: dogName,
            rasseName: rasseName
        }
        setDogs([...allDogs, dog])
        setDogName("")
        setRasseName("")
    }

  return (
    <div className="pb-4 flex flex-col md:flex-row gap-6 justify-center items-center"> 
            <div className='flex flex-col md:flex-row gap-4 w-full '>
                <input value={dogName}className={`border-2 ${dogName.length > 3 ? "outline-green-300" : "outline-red-300"}`}type="text" 
               name="dogname" placeholder='Dogname' onChange={(event) => {setDogName(event.target.value)}}>    
                </input>
                <input value={rasseName} className={`border-2 ${(rasseName == "Labrador" || rasseName == "Dackel" || rasseName == "Golden Retriever") ? "outline-green-300" : "outline-red-300"}`}
                type="text" placeholder='Rasse' name="rasse" 
                onChange={(event) => {setRasseName(event.target.value)}} ></input>
            </div>
            {dogName.length > 3 && (rasseName == "Labrador" || rasseName == "Dackel" || rasseName == "Golden Retriever") && (<button onClick={handleClick}>Add</button>)}       </div>
  )
}
