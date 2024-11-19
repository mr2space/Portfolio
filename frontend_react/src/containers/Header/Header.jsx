import React from 'react';
import { motion } from 'framer-motion';
import { images, urls } from '../../constants';
import AppWrap from '../../components/AppWrap';
import './Header.css';




const Header = () => {
  const scaleVariance = {
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  
  
  
  return (
    <div id="home" className="app__header ">
      <motion.div
        whileInView={{
          x:[-100,0],
          opacity:[0,1]
        }}
        transition={{
          duration:0.5
        }}
        className='app__header-info '
      >
        <div className="app__header-badge">
          <div className="badge-cmp flex justify-center items-center">
            <span className='text-4xl 2xl:text-[5rem]'>👋</span>
            <div className="ml-5">
              <p className='p-text'>Hello, I am</p>
              <h1 className='header-text'>Prince</h1>
            </div>

          </div>

          <div className="tag_cmp">
            <p className='p-text'>Fullstack developer</p>
            <p className='p-text'>System Designer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5, delayChildren:0.5}}
        className='app__header-img'
      >
        <img src={images.profile} className=' w-full object-contain z-[10] relative' alt="profile_bg" />

        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:1, ease:"easeInOut"}}
          className='overlay_circle -z-0'
          src={images.circle}
          alt="circle"

        />

      </motion.div>

      <motion.div
        variants={scaleVariance}
        whileInView={scaleVariance.whileInView}
        className='app__header-circles'
      >
        {[images.cpp, images.react, images.django].map((item, idx)=>(
          <div key={idx} className='circle_cmp flex justify-center items-center'>
            <img src={item} alt="tech" />
          </div>
        ))}
      </motion.div>
      
      <div className="resume-btn">
          <a href={urls.resume_link} target='_blank' download>Download Resume</a>
      </div>

    </div>
  )
}

export default AppWrap(Header, 'home', '');