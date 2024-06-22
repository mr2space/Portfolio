import React from "react";
import "./NavigationDots.css";

const NatvigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about","work", "contact", "skills"].map((item, idx) => (
          <a
            href={`#${item}`}
            key={item+idx}
            className="app__navigation-dot"
            style={active === item? {backgroundColor:"#313bac"}:{}}
          />
      ))}
    </div>
  );
};

export default NatvigationDots;
