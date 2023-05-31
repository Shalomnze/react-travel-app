import React from 'react'
import Hero from './assets/Hero'
import Navbar from './assets/Navbar'
import Offer from './assets/Offer'
import Plans from './assets/Plans'
import Rooms from './assets/Rooms'
import Slider from './assets/Slider'
import Footer from './assets/Footer'


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Offer />
        <Plans />
        <Rooms />
        <Slider />
        <Footer />
    </div>
  )
}

export default App