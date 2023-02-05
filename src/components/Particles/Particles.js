import React, { useState, useEffect } from "react";
import "./style.css";

const Particle = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
      setStyle({
        top: `${Math.floor(Math.random() * 50)}px`,
        animation: "fall 1s linear",
      });
    };

    const intervalId = setInterval(updateStyle, 500);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="particle" style={style} />;
};

export default Particle;
