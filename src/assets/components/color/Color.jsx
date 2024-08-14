import React, { useState } from "react";
import "./color.css";

import colors from "../../colors";

const Color = () => {
  const getRandomColors = () => {
    const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
    return shuffledColors.slice(0, 4);
  };

  const [randomColors, setRandomColors] = useState(getRandomColors());

  const sizes = ["30vh", "18vh", "18vh", "18vh"];

  const handleButtonClick = () => {
    setRandomColors(getRandomColors());
  };

  return (
    <section className="color-container">
      {randomColors.map((color, index) => (
        <div
          key={index}
          className={`color-box ${
            index === 0
              ? "rounded-top"
              : index === randomColors.length - 1
              ? "rounded-bottom"
              : ""
          }`}
          style={{
            backgroundColor: color.colorCode,
            color: "#f8f8ff",
            height: sizes[index],
          }}
        >
          {" "}
          <div className="color-name-container">
            <h2 className="color-name">{color.name}</h2>
            <h3 className="color-code">{color.colorCode}</h3>
          </div>
          <p className="color-text">{color.text}</p>
        </div>
      ))}
      <button className="button" onClick={handleButtonClick}>
        something else
      </button>
      <p className="color-text-white">Ghost white #f8f8ff</p>
    </section>
  );
};

export default Color;
