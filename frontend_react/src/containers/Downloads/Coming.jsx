import React from "react";
import AppWrap from '../../components/AppWrap';
import MotionWrap from '../../components/MotionWrap';
import images from '../../constants/images';
import "./coming.css"

const Coming = () => {
  return (
    <section
      // id="sudoku"
      className="pt-40 lg:pt-20 w-screen h-[80vh] overflow-hidden relative bg-white flex justify-center items-center flex-col gap-20"
    >
      <h1 className="text-cyan-900 text-7xl lg:text-8xl font-bold">Soon Available</h1>

      <div className="cbtn_download">
        <a href="#">COMING SOON</a>
      </div>

      <div className="bg-cyan-100 text-cyan-700 font-bold px-8 py-3 rounded-full border border-cyan-700">
        <a href="/"> {'<-'} {" "} Go back</a>
      </div>
    </section>
  );
};

export default Coming;
