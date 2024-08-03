import React from "react";
import AppWrap from '../../components/AppWrap';
import MotionWrap from '../../components/MotionWrap';
import images from '../../constants/images';
import './Sudoku.css'

const Coming = () => {
  return (
    <section
      id="sudoku"
      className="pt-40 lg:pt-20 w-screen h-screen overflow-hidden relative"
    >
      <h1 className="sudoku_heading">Soon</h1>
      <h1 className="sudoku_heading">Available</h1>

      <div className="btn_download ml-[8%]">
        <a href="#">COMING SOON</a>
      </div>

      <div className="pattern_grid">
        <img src={images.grid_pattern} alt="" />
      </div>
    </section>
  );
};

export default Coming;
