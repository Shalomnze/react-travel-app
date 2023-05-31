import { useState } from "react"
import React from 'react'
import {HiMenuAlt3} from "react-icons/hi"


const Navbar = () => {

  const [nav, activeNav] = useState (false);

  const handleNav = () =>{
    activeNav(!nav)
    // if (!nav){
    //   document.body.style.overflow = "hidden"
    // }
    // else{
    //   document.body.style.overflow = "scroll"
    // }
  }

  return (
    <div className=' absolute w-full flex justify-between p-4 items-center'>

      <h1 className=' text-white font-bold text-2xl z-20'>Travelle</h1>

      <HiMenuAlt3 onClick={handleNav} className=' z-20 text-white cursor-pointer ' size={25} />

      <div className= { nav ? " ease-in duration-300 fixed text-gray-200 left-0 top-0 w-full h-screen bg-black/60 px-4 py-7 flex-col z-10" : " absolute top-0 h-screen left-[-100%]  ease-in duration-500 z-10"}>

        <ul className=' flex flex-col fixed w-full h-screen items-center justify-center'>
          <li className=' font-bold text-2xl m-6 cursor-pointer'>Home</li>
          <li className=' font-bold text-2xl m-6 cursor-pointer'>Destinations</li>
          <li className=' font-bold text-2xl m-6 cursor-pointer'>Reservations</li>
          <li className=' font-bold text-2xl m-6 cursor-pointer'>Sales</li>
          <li className=' font-bold text-2xl m-6 cursor-pointer'>Room</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar