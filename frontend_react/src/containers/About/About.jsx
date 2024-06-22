import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion";
import { images } from '../../constants';
import AppWrap from '../../components/AppWrap';
import MotionWrap from '../../components/MotionWrap';

const About = () => {
  const abouts = [
    {title:"web developer", description:"I am good dev", imgUrl:images.about01},
    {title:"Full stack", description:"I am good dev", imgUrl:images.about02},
    {title:"Backend", description:"I am good dev", imgUrl:images.about03},
    {title:"Devops", description:"I am good dev", imgUrl:images.about04}
  ]
  return (
    <div className='flex-1 w-full flex-col lg:pt-20'>
    <h2 className='text-5xl text-center font-semibold m-4'>
      I know that <span className=' text-blue-600'>Good Design</span> <br /> means <span className=' text-blue-600'> Good Business</span>
    </h2>
    <div className="app__profiles flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, idx)=>(
          <motion.div
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          whileInView={{opacity:1}}
          className='app__profile-item w-[190px] 2xl:w-[370px] 2xl:my-8 2xl:mx-16 flex justify-start items-start flex-col m-8'
          key={about.title + idx}
          >
            <img src={about.imgUrl} alt={about.title} className='w-full h-[170px] 2xl:h-[320px] rounded-2xl object-cover' />
            <h2 className=' mt-5 ' >{about.title}</h2>
            <p className='p-text mt-3'>{about.description}</p>
          </motion.div>
        ))}
    </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About), 
  "about", "")