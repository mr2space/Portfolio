import React, { useState } from 'react';
import AppWrap from '../../components/AppWrap';
import MotionWrap from '../../components/MotionWrap';
import { images } from '../../constants';
import "./footer.css"
import { FaGalacticSenate } from 'react-icons/fa6';
import feedback from '../../Firebase';
import validator from 'validator';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if ((!validator.isAlpha(formData.username) )|| (!validator.isEmail(formData.email))){
      setLoading(false);
      return ;
    }
    const contact = {
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    let result = feedback(contact.name, contact.email, contact.message);
    setFormData({ name: '', email: '', message: '' });
    if (result) setIsFormSubmitted(true);
    setLoading(false);
    
  };

  return (
    <div id="contact" className='px-5 lg:px-0 lg:pt-20 bg-1-lg-backg w-full mt-[200px] lg:mt-[0px] flex flex-col justify-center items-center transparent'>
      <h2 className="head-text text-5xl text-center w-full font-semibold m-4 ">Take a  <span className='text-3-primary'>coffee</span> & chat with <span className='text-3-primary'>me</span></h2>

      <div className="app__footer-cards w-2/5 flex justify-center lg:justify-evenly items-center flex-wrap-reverse mt-8 my-8">
        <div className="app__footer-card min-w-[340px]">
          <img src={images.email} alt="email" />
          <a href="mailto:princegoswami.work@gmail.com" className="p-text">princegoswami.work@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 (739) 308-5743" className="p-text">+91 (739) 308-5743</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form flex justify-center items-center w-4/5 lg:w-2/5 gap-4 flex-col my-4 mx-8 app__flex">
          <div className="app__flex w-full transition-all">
            <input className="" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex w-full">
            <input className="" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className='w-full'>
            <textarea
              className="h-[170px]"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="py-4 px-8 bg-blue-600 border-none hover:bg-blue-700 transition-all text-white rounded-lg" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div className='app__footer-form flex justify-center items-center w-4/5 lg:w-2/5 gap-4 flex-col my-4 mx-8 app__flex rounded-md cursor-pointer bg-blue-600 h-[400px]'>
          <h3 className="head-text font-semibold text-white text-xl">
            ! Thank you for getting in touch !
          </h3>
        </div>
      )}
    </div>
  );
};

export default MotionWrap(Footer, 'app__footer');