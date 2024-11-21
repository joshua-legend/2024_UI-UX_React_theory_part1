import { useState } from "react";

const Shape1 = () => {
  const [size, setSize] = useState("100px");
  const [color, setColor] = useState("green");

  const changeSize = () => {
    setSize((prev) => (prev == "100px" ? "200px" : "100px"));
  };

  const changeColor = () => {
    setColor((prev) => {
      if (prev == "green") return "yellow";
      else if (prev == "yellow") return "red";
      else return "green";
    });
  };

  const colorMap = {
    green: "초록",
    yellow: "노랑",
    red: "빨강",
  };

  return (
    <>
      <div
        style={{
          width: size,
          height: size,
          border: "1px solid black",
          backgroundColor: color,
        }}
      ></div>
      <button onClick={changeSize}>{size == "100px" ? "크게" : "작게"}</button>
      <button onClick={changeColor}>{colorMap[color]}</button>
    </>
  );
};

export default Shape1;
