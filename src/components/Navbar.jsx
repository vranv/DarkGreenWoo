import React, { useState } from 'react'

export default function Navbar() {
  
  const [button, setButton] = useState(false)

  function onClickHandler() {setButton(!button)}

  return (
    <div className='flex justify-end relative'>
      <button onClick={onClickHandler} className='text-green-300 hover:text-green-800 duration-200 mr-2'>menu</button>  
      {button &&
        <nav className='absolute px-5 flex flex-col py-6 items-center z-10 bg-gradient-to-l from-green-800 to-green-500'>
          <button className='text-green-200 hover:text-green-400 duration-200 fixed top-1' onClick={onClickHandler}>close</button>
          <a className='text-center'>somethin</a>
          <a href="">somethin</a>
        </nav> 
      }
    </div>
  )
}
