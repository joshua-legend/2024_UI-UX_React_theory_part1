import { useState } from "react";

const Shape = () => {
  // 버튼: 검은색 빨간색
  // 버튼: 둥글게 네모

  const [bg, setBg] = useState("black");
  const [rd, setRd] = useState("0px");

  const changeColor = () =>
    setBg((prev) => (prev == "black" ? "red" : "black"));

  const changeRadius = () =>
    setRd((prev) => (prev == "0px" ? "9999px" : "0px"));

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: bg,
          border: "1px solid black",
          borderRadius: rd,
        }}
      ></div>
      <button onClick={changeColor}>
        {bg == "black" ? "빨간색" : "검은색"}
      </button>
      <button onClick={changeRadius}>{rd == "0px" ? "둥글게" : "네모"}</button>
    </>
  );
};

export default Shape;
