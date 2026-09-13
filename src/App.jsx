
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import TechnologySection from './Components/TechnologySection'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechnologySection></TechnologySection>
      <Footer></Footer>
      <ToastContainer position="bottom-right" autoClose={2000} newestOnTop />
    </>
  )
}

export default App
