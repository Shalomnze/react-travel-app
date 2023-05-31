import React from 'react'
import image7 from "../images/7.jpg"
import image8 from "../images/8.jpg"
import image9 from "../images/9.jpg"


const Rooms = () => {
  return (
    <div className=' max-w-[1150px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className=' lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className=' text-2xl font-bold'>Quality Interior Rooms</h3>
            <p className=' pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nam odio delectus quo? Aspernatur ab inventore maxime libero saepe! Earum!</p>
        </div>

        <div className=' grid grid-cols-2 col-span-2 gap-2'>
            <img className='  object-cover w-full h-full' src={image7} alt="" />
            <img className='  row-span-2 object-cover w-full h-full' src={image8} alt="" />
            <img className='  object-cover w-full h-full' src={image9} alt="" />
        </div>
    </div>
  )
}

export default Rooms