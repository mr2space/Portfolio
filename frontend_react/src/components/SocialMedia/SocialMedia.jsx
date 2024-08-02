import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="social__container ">
        <a href="https://www.linkedin.com/in/mrprincegoswami" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div className="social__container">
        <a href="https://leetcode.com/u/MrPrinceGoswami/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
      <div className="social__container">
        <a href="https://github.com/mr2space" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
