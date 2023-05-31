import React from 'react'
import image1 from "../images/1.jpg"


const Hero = () => {
  return (
    <div className=' w-full h-screen'>
        <img className=" top-0 left-0 w-full h-screen object-cover" src= {image1} alt="" />
        <div className=' bg-black/20 absolute top-0 left-0 w-full h-screen' />

        <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className=' text-xl'>All Inclusive</p>
                <h1 className=' font-bold text-4xl md:text-6xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className=' max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quae eaque explicabo, ipsam voluptates dolorem commodi atque as quam sint.
                </p>
                <button className=' bg-white text-black'> Make Reservations</button>
            </div>
        </div>

    </div>
  )
}

export default Hero