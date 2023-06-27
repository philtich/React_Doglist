import React from 'react'

import { useState } from 'react'

type dogsType = {
    name: string,
    rasse: string
}

export const InputsList = () => {
    const [dogs, setDogs] = useState([
        { name: "Bello", rasse: "Labrador" },
        { name: "Speedy", rasse: "Dackel" },
        { name: "Sammy", rasse: "Labrador" }
    ])

    const handleClick = (event: any) => {
        event.preventDefault();
        const dog = {
            name: dogName,
            rasse: rasseName
        }
        
        setDogs([...dogs, dog])
        setDogName("")
        setRasseName("")
       
    }

    const [dogName, setDogName] = useState("")
    
    const handleChangeOne = (event: any) => {
        
         setDogName(event.target.value)
    }

    const [rasseName, setRasseName] = useState("")

    const handleChangeTwo = (event: any) => {
        setRasseName(event.target.value)   
    }

  return (
    <section className='container py-8'>
        <div className="pb-4 flex flex-col md:flex-row gap-6 justify-center items-center"> 
            <div className='flex flex-col md:flex-row gap-4 w-full '>
                <input className={`border-2 ${dogName.length > 3 ? "border-green-300" : "border-red-300"}`}type="text" value={dogName} name="dogname" placeholder='Dogname' onChange={handleChangeOne}>    
                </input>
                <input className={`border-2 ${(rasseName == "Labrador" || rasseName == "Dackel" || rasseName == "Golden Retriever") ? "border-green-300" : "border-red-300"}`}value={rasseName} type="text" placeholder='Rasse' name="rasse"  onChange={handleChangeTwo} ></input>
            </div>
            {dogName.length > 3 && (rasseName == "Labrador" || rasseName == "Dackel" || rasseName == "Golden Retriever") && <button onClick={handleClick}>Add</button>}   
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6'>
            {dogs.map((el: dogsType) => (
            <div className='flex justify-center items-center gap-2 flex-col bg-gray-300 p-8 rounded-md'>
            <p className='text-2xl uppercase font-bold'>{el.name}</p>
            <span className='text-gray-600'>{el.rasse}</span>
            </div>
            ))}
        </div>
    </section>
  )
}
