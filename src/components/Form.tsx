import React from 'react'
import { useState } from 'react'

import { dogsType } from './Main';

type FormProps = {
    setDogName: (dogName: string) => void;
    setRasseName: (rasseName: string) => void;
    allDogs: dogsType[]
    handleClick: (event:any) => void
}

export const Form = ({ setDogName, setRasseName, allDogs, handleClick }: FormProps) => {
    const [rassenName, setRassenName] = useState("")
    const [dogsName, setDogsName] = useState("")
    

  return (
    <div className="pb-4 flex flex-col md:flex-row gap-6 justify-center items-center"> 
            <div className='flex flex-col md:flex-row gap-4 w-full '>
                <input className={`border-2 ${dogsName.length > 3 ? "outline-green-300" : "outline-red-300"}`}type="text" 
               name="dogname" placeholder='Dogname' onChange={(event) => {setDogsName(event.target.value); setDogName(event.target.value)}}>    
                </input>
                <input className={`border-2 ${(rassenName == "Labrador" || rassenName == "Dackel" || rassenName == "Golden Retriever") ? "outline-green-300" : "outline-red-300"}`}
                type="text" placeholder='Rasse' name="rasse" 
                onChange={(event) => {setRassenName(event.target.value); setRasseName(event.target.value)}} ></input>
            </div>
            {dogsName.length > 3 && (rassenName == "Labrador" || rassenName == "Dackel" || rassenName == "Golden Retriever") && (<button onClick={handleClick}>Add</button>)}       </div>
  )
}

