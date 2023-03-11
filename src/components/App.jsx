import './App.css'
import Hero from './Hero/Hero'
import { BrowserRouter } from 'react-router-dom'
import Nav from './NavBar/Nav'
import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Hero/>
    <AboutMe/>
    <Skills/>
    </BrowserRouter>
    </>
  )
}

export default App
