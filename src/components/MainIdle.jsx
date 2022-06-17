import React, { useState, useEffect } from "react";

//ccs link
import "../css/index.css";
//components
import VideoPlanets from "./VideoPlanets";

const MainIdle = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div id="main-planets-idle">
      {/* <video src={idlePlanets} loop muted autoPlay /> */}

      {isMobile === true && (
        <div className="mobile-device-admonitory">
          <div>
            <i className="bi bi-arrow-counterclockwise" /> For a better
            experience please rotate your device
          </div>
        </div>
      )}

      <VideoPlanets />
    </div>
  );
};

export default MainIdle;
