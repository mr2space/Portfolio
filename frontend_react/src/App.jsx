import React from "react";
import { About, Header, Work, Skills, Footer, Dsa } from "./containers";
import Navbar from "./components/Navbar/Navbar";
import Sudoku from "./containers/Downloads/Sudoku";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coming from "./containers/Downloads/Coming";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <div className="bg-slate-300">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/download/sudoku" element={<Sudoku />} />
          <Route path="/download/*" element={<Coming />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
