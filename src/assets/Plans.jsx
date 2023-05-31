import React from 'react'
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"
import image6 from "../images/6.jpg"


const Plans = () => {
  return (
    <div className=' max-w-[1200px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

        <div className=' grid grid-cols-2 grid-row-6 h-[90vh]'>
            <img className=' row-span-3 object-cover w-full h-full p-2' src={image2} alt="/" />
            <img className=' row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
            <img className=' row-span-2 object-cover w-full h-full p-2' src={image4} alt="/" />
            <img className=' row-span-3 object-cover w-full h-full p-2' src={image5} alt="/" />
            <img className=' row-span-2 object-cover w-full h-full p-2' src={image6} alt="/" />
        </div>

        <div className=' flex flex-col h-full justify-center'>
            <h3 className=' text-4xl font-semibold md:text-6xl'>Plan Your Next Trip</h3>
            <p className=' text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, culpa.</p>
            <p className=' pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias soluta voluptatibus totam necessitatibus perferendis sunt! Assumenda reiciendis dolores maiores magnam numquam nostrum, praesentium eaque optio.</p>
            
            <div>
                <button className=' border-gray-500 mr-4 hover:shadow-xl'>Learn More</button>
                <button className=' bg-black/90 text-white hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
        
    </div>
  )
}

export default Plans