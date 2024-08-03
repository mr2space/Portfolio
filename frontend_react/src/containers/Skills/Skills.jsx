import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../components/AppWrap";
import MotionWrap from "../../components/MotionWrap";
import { Tooltip } from "react-tooltip";
import { images } from "../../constants";

const Skills = () => {
  const skill = [
    { name: "Java", img: images.java },
    { name: "C/C++", img: images.c_cpp },
    { name: "Python", img: images.python_neon },
    { name: "JavaScript", img: images.js },
    { name: "Sql", img:images.sql}
  ];
  const experience = [
    { name: "Node.js", img: images.nodejs },
    { name: "Django", img: images.django2 },
    { name: "MongoDB", img: images.mongodb },
    { name: "Docker", img: images.docker },
    { name: "Figma", img: images.figma },
  ];

  return (
    <div
      id="skills"
      className="lg:pt-20 h-screen transparent"
    >
      <div className="px-5 lg:px-0">
      <h2 className="head-text text-5xl text-center font-semibold m-4">
        Skills<span className="text-3-primary"> & </span >Experience
      </h2>
      </div>
      <div className="flex px-20 justify-center">
      <div className="app__skills-container px-20   w-full md:w-4/5 mt-12 flex flex-col md:flex-row justify-center items-center">
        <motion.div className="app__skills-list justify-center flex-1 flex flex-wrap mr-0 md:mr-20 md:justify-center md:items-center">
          {skill.map((item) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item flex flex-col text-center m-4 transition-all"
              key={item.name}
            >
              <div className="w-[90px] 2xl:w-[100px] 2xl:h-[100px] h-[90px] rounded-full bg-white flex justify-center border-2 border-gray-300 items-center hover:shadow-2xl transition-all">
                <img src={item.img} alt={item.name} className="w-[65%] h-[65%] rounded-full" />
              </div>
              <p className="p-text font-medium mt-1">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="app__skills-container px-20 w-full md:w-4/5 mt-12 flex flex-col md:flex-row justify-center items-center">
        <motion.div className="app__skills-list flex-1 justify-center flex flex-wrap mr-0 md:mr-20 md:justify-center md:items-center">
          {experience.map((item) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item flex flex-col text-center m-4 transition-all"
              key={item.name}
            >
              <div className="w-[90px] 2xl:w-[100px] 2xl:h-[100px] h-[90px] rounded-full bg-white flex justify-center items-center  border-2 border-gray-300 hover:shadow-2xl transition-all">
                <img src={item.img} alt={item.name}  className="w-[65%] h-[65%] rounded-full"  />
              </div>
              <p className="p-text font-medium mt-1">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default MotionWrap(Skills);
