import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import MotionWrap from "../../components/MotionWrap";
import AppWrap from "../../components/AppWrap";


//TODO:WORK ON FIGMA
const Dsa = () => {
  return (
    <div className="lg:pt-20 h-screen bg-0-lg-backg ">
      <Gauge
        sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
                fontSize: 18,
                transform: 'translate(0px, -20px)',
            },
            [`& .${gaugeClasses.valueArc}`]: {
                fill: "#050c9c"
            },
            [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.grey[500],
                
            },
            })}
            cornerRadius={100}
        width={650}
        height={150}
        value={(285 / 400) * 100}
        startAngle={-90}
        endAngle={90}
        innerRadius="80%"
        outerRadius="85%"
      />
    </div>
  );
};

export default AppWrap(MotionWrap(Dsa), "dsa", "DSA");
