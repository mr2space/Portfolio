import React from 'react'
import AppWrap from '../../components/AppWrap';
import MotionWrap from '../../components/MotionWrap';
import images from '../../constants/images';
import './Sudoku.css'

const Sudoku = () => {
  return (
    <section id="sudoku" className='pt-40 lg:pt-20 w-screen h-screen overflow-hidden relative'>
        <h1 className='sudoku_heading'>Download</h1>
        <h1 className='sudoku_heading'>The Game</h1>

        <div className="btn_download ml-[8%]">
          <a href="">DOWNLOAD</a>
        </div>

        <div className="pattern_grid">
          <img src={images.grid_pattern} alt="" />
        </div>
    </section>
  )
}

export default MotionWrap(Sudoku, 'download_sudoku');