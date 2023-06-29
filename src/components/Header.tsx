import React from 'react'

export const Header = () => {
  return (
    <section className="container flex py-4 flex-col justify-center gap-8 border-b-2 border-gray-300">
    <h1 className="text-center text-5xl font-bold ">Hunde Liste</h1>
    <div>
      <h2 className='text-gray-300 text-2xl py-4'>Erlaubte Rassen:</h2>
      <div className='flex flex-col gap-2'>
        <span className="spanDog">Labrador</span>
        <span className="spanDog">Golden Retriever</span>
        <span className="spanDog">Dackel</span>
      </div>
    </div>
  </section>
  )
}
