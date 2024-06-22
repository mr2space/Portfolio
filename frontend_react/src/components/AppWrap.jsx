import React from 'react'
import NatvigationDots from "./NatvigationDots/NatvigationDots";
import SocialMedia from "./SocialMedia/SocialMedia";


const AppWrap = (Component, idname, classNames) => function HOC() {
  return (
    
    <div id={idname} className={`app__container relative ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper h-full w-full">
        <Component />
      </div>
      <NatvigationDots active={idname} />
    </div>
  )
}

export default AppWrap;