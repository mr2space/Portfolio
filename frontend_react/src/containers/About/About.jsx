import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion";
import { images } from '../../constants';
import AppWrap from '../../components/AppWrap';
import MotionWrap from '../../components/MotionWrap';

const About = () => {
  const abouts = [
    {title:"Frontend", description:"Designs intuitive, responsive, and engaging interfaces.", imgUrl:images.frontend},
    {title:"Backend", description:"Efficient, scalable, reliable backend solutions.", imgUrl:images.backend},
    {title:"Devops", description:"Efficient automation and reliable deployment.", imgUrl:images.devops},
    {title:"Machine learning", description:"Turning complex data into actionable intelligence.", imgUrl:images.ml}
  ]
  return (
    <div className=' transparent flex-1 w-full flex-col lg:pt-20'>
    <h2 className='text-5xl text-center font-semibold m-4'>
    {/* " development for seamless solutions." */}
    Unified <span className=' text-3-primary'>development</span> <br /> for <span className=' text-3-primary'> seamless solutions</span>
    </h2>
    <div className="app__profiles flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, idx)=>(
          <motion.div
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          whileInView={{opacity:1}}
          className='app__profile-item w-[210px] 2xl:w-[370px] 2xl:my-8 2xl:mx-16 flex justify-start items-start flex-col m-8 '
          key={about.title + idx}
          >
            <img src={about.imgUrl} alt={about.title} className='w-full h-[200px] 2xl:h-[320px] rounded-2xl object-cover' />
            <h2 className=' mt-5  mx-auto font-semibold' >{about.title}</h2>
            <p className='p-text  mx-auto mt-3'>{about.description}</p>
          </motion.div>
        ))}
    </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About), 
  "about", "")