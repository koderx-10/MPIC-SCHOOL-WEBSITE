import { useState } from 'react'



import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

   const [toggle, setToggle] = useState(false); 

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="grow">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="academics">
          <Features />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>




  )
}

export default App
