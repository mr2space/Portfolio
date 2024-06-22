import React from 'react'
import { About, Header, Work, Skills, Footer} from "./containers";
import Navbar from './components/Navbar/Navbar';

export const App = () => {
  return (
    <div className=" bg-sky-100">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
    </div>
  )
}
