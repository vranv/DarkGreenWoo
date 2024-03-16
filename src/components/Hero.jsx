import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col min-h-screen relative justify-center'>
        <img className='opacity-40 min-h-screen' src="darkGreenWoods.jpg" alt="Dark Green Woods" />
        <section className='absolute h-52 w-52 sm: rounded-full self-center'>
            <img className='z-10 h-52 w-52 rounded-full' src="darkGreenWoods.jpg" alt="Dark Green Woods" />
            <div className='flex flex-col text-center'>
              <h1><span className='text-black hover:text-green-950 duration-200'>Dark</span><span className='text-green-600 hover:text-green-950 duration-200'>Green</span><span className='text-yellow-950 hover:text-yellow-600 duration-200'>Woo</span></h1>
              <p className='text-green-400'>Find your <span className='hover:text-rose-400 duration-200'>WOOD</span></p>
              <input className='bg-green-700 opacity-30 hover:bg-green-900 outline-1 outline-none focus:outline-red-950 text-center' type="text" placeholder='Explore' />
            </div>
        </section>
    </div>
  )
}
