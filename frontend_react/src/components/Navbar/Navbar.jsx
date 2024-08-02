import React, {useState} from 'react'
import {images} from "../../constants";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import { motion } from 'framer-motion';
import "./Navbar.css";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links hidden lg:flex'>
            {['home', 'work', 'contact', 'skills'].map((item)=>(
                <li key={`link-${item}`} className="p-0 flex-col justify-center items-center flex">
                    <div className=" w-[5px] h-[5px] rounded-full mb-1"  />
                    <a href={`#${item}`} className=" text-gray-700 flex-col uppercase font-medium transition-all hover:text-3-primary" >{item}</a>
                </li>
            ))}
        </ul>

        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={()=>(setToggle(true))} />
            {toggle &&(
                <motion.div
                    whileInView={{x:[300,0]}}
                    transition={{duration:0.85, ease:'easeOut'}}
                >
                    <HiX onClick={()=>(setToggle(false))} />
                    <ul className="list-none m-0 p-0 flex justify-start items-start flex-col h-full w-full lg:hidden">
                    {['home', 'work', 'contact', 'skills'].map((item)=>(
                        <li key={`menu-${item}`}  className="m-4">
                            <a href={`#${item}`} className=" text-gray-700 flex-col uppercase font-medium transition-all hover:text-3-primary" >{item}</a>
                        </li>
                    ))}
                    </ul>
                </motion.div>   
            )}
        </div>
    </nav>
  )
}

export default Navbar