import React from 'react'
import { About, Header, Work, Skills, Footer} from "./containers";
import Navbar from './components/Navbar/Navbar';

export const App = () => {
  return (
    <div className=" bg-0-lg-backg">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
    </div>
  )
}
