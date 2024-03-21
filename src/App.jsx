import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Banner from './Components/Banner'
import About from './Components/About'
import Expertise from './Components/Expertise'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Expertise/>
      <Footer/>
    </>
  )
}

export default App
