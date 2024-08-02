import React, { useState } from "react";
import "./NavigationDots.css";

const NatvigationDots = ({ active }) => {
  const [handleEvent, setHandleEvent] = useState(active);
  return (
    <div className="app__navigation">
      {["home", "about","work", "contact", "skills"].map((item, idx) => (
          <a
            href={`#${handleEvent}`}
            key={handleEvent+idx}
            className="app__navigation-dot"
            onClick={()=>setHandleEvent(item)}
            style={handleEvent === item? {backgroundColor:"#313bac"}:{}}
          />
      ))}
    </div>
  );
};

export default NatvigationDots;
