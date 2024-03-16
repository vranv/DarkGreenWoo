import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Woods from './components/Woods'


function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-green-200 to-green-800 text-white text-sm sm:text-base '>
      <Navbar />
      <Hero />
      <Woods />
    </main>
  )
}

export default App
