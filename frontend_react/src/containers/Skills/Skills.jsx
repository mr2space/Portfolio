import React, {useEffect, useState} from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../components/AppWrap";
import MotionWrap from '../../components/MotionWrap';
import {Tooltip} from "react-tooltip"
import { images } from "../../constants";

const Skills = () => {
  const skill = [{name:"prince", img:images.redux}, {name:"prince", img:images.redux}, {name:"prince", img:images.redux}]
  const experience = []

  return (
    <div className='flex-1 w-full flex-col flex justify-center items-center'>
      <h2 className='head-text text-5xl text-center font-semibold m-4'>Skill & Experience</h2>
      <div className="app__skills-container w-full md:w-4/5 mt-12 flex flex-col md:flex-row justify-center items-center">
          <motion.div className='app__skills-list flex-1 flex flex-wrap mr-0 md:mr-20 md:justify-start md:items-start'>
            {skill.map((item)=>(
              <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                className='app__skills-item flex flex-col text-center m-4 transition-all'
                key={item.name}
              >
                <div className='w-[90px] 2xl:w-[100px] 2xl:h-[100px] h-[90px] rounded-full bg-white flex justify-center items-center hover:shadow-lg transition-all'>
                  <img src={item.img} alt={item.name} className='w-2/4 h-2/4 ' />
                </div>
                <p className='p-text font-medium mt-1'>
                    {item.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div
            className='app__skills-exp'
          >
            {experience.works.map((work)=>(
              <>
              <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                className='app__skills-exp-work flex flex-col text-center m-4 transition-all'
                data-tip
                data-for = {work.name}
                key={work.name}
              >
                <h4>
                  {work.name}
                </h4>
                <p>{work.company}</p>
              </motion.div>
              </>
            ))}
          </motion.div> */}
      </div>
    </div>
  )
}

export default MotionWrap(Skills)