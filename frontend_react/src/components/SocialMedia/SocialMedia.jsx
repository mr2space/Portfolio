import React from 'react'
import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div className="social__container " >
            <BsTwitter />
        </div>
        <div className='social__container'>
            <FaFacebookF />
        </div>
        <div className='social__container'>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia;