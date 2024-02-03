import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";



function App() {
  

  return (
    <div className="App bg-gradient-to-b from-blue-900 to-pink-800 text-indigo-100">
      <Intro/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
