import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Resume from './components/Resume'
import Projects from './components/projects/Projects'
import {BrowserRouter} from "react-router-dom"
import Contact from './components/Contact'
import Footer from './components/Footer'
import  { Toaster } from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
      </div>
      </div>
      <Toaster position='top-right'/>
      </BrowserRouter>
    </>
  )
}

export default App
