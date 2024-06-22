import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../components/AppWrap";
import MotionWrap from "../../components/MotionWrap";
import { images } from "../../constants";

const Work = () => {
  const Data = [
    {title:"modern ui", imageUrl:images.skype, description:'best ui ever', project_link:"google.com", code_link:"github.com", tags:["App", "Web"]},
    {title:"modern ui", imageUrl:images.vue, description:'best ui ever', project_link:"google.com", code_link:"github.com", tags:["Cloud", "Web"]},
    {title:"modern ui", imageUrl:images.typescript, description:'best ui ever', project_link:"google.com", code_link:"github.com", tags:["Code"]},
  ]
  const [sampleData, setSampleData] = useState(Data)
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})

  const handleWorkFilter = (items) => {
    setActiveFilter(items);
    setAnimateCard([{y:100, opacity:0}])
    setTimeout(()=>{
      setAnimateCard([{y:0, opacity:1}])
      if (items == "All"){
        setSampleData(Data);
      }else{
        setSampleData(Data.filter((item)=>item.tags.includes(items)))
      }
    } , 500)
  }


  return (
    <div className="flex flex-1 flex-col w-full lg:pt-20">
      <h2 className="text-5xl text-center font-semibold m-4">
        I know that <span className=" text-blue-600">Good Design</span> <br />{" "}
        means <span className=" text-blue-600"> Good Business</span>
      </h2>

      <div className="app__work-filter flex flex-row justify-center items-center gap-4 mt-16 mb-8">
        {['App', "Web", "Cloud","Code", 'All'].map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item transition-all py-1 px-3  rounded-md hover:bg-blue-600 hover:text-white cursor-pointer  ${activeFilter === item? 'item-active bg-blue-600 text-white':'text-black bg-white ' }` }
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className="app__work-portfolio flex flex-wrap justify-center items-centers"
      >
        {sampleData.map((data, idx)=>(
          <div className="app__work-item flex flex-wrap justify-center items-centers md:w-[270px] flex-col md:m-8 p-4 bg-white cursor-pointer transition-all hover:shadow-2xl rounded-2xl w-full m-4" key={idx}>
            <div className="w-full h-[230px] relative flex justify-center items-center rounded-xl overflow-hidden">
              <img src={data.imageUrl} alt={data.title} className=" w-full h-full border object-cover" />
              <motion.div
                whileHover={{opacity:[0,1]}}
                transition={{duration:0.25, staggerChildren:0.25, ease:'easeInOut'}}
                className="app__work-hover absolute left-0 right-0 bottom-0 top-0 w-full h-full  bg-transparent hover:bg-black/55 opacity-0 flex justify-center items-center"
              >
                <a href={data.project_link} target="_blank" rel="noreffer">
                  <motion.div
                  whileInView={{scale:[0,1], opacity:[0,1]}}
                  whileHover={{scale:[1,0.9]}}
                  transition={{duration:0.25}}
                  className="w-[50px] h-[50px] rounded-full bg-black/25 text-white m-4 font-semibold cursor-pointer transition flex justify-center items-center"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={data.code_link} target="_blank" rel="noreffer">
                  <motion.div
                  whileInView={{scale:[0,1]}}
                  whileHover={{scale:[1,0.95]}}
                  transition={{duration:0.25}}
                  className="w-[50px] h-[50px] rounded-full bg-black/25 text-white m-4 font-semibold cursor-pointer transition flex justify-center items-center"

                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content p-2 w-full relative flex-col flex items-center">
              <h4 className="bold-text m-4 leading-normal">{data.title}</h4>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Work),'work', 'work');
