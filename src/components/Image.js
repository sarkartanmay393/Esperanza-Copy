import React, { useState, useEffect } from "react";
import earth from "../assets/mtr.svg";
import satr from "../assets/satr.png";

const Image = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let timeoutId;
    const animate = () => {
      setAngle((prev) => prev + Math.PI / 600);

      timeoutId = setTimeout(animate, 200000000000);
    };

    animate();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <img
        src={earth}
        style={{
          position: "absolute",
          top: `${window.innerHeight / 2 - 100 * Math.sin(angle)}px`,
          left: `${window.innerWidth / 2 - 1000 * Math.cos(angle)}px`,
          zIndex: 0,
        }}
      />
    </>
  );
};

export default Image;
