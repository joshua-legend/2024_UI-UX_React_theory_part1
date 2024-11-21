import { useState } from "react";

const Catemoji = () => {
  const [cat, setCat] = useState("😺");
  const change = () => setCat((prev) => (prev == "😺" ? "😻" : "😺"));
  return (
    <div>
      <button onClick={change}>{cat}</button>
    </div>
  );
};

export default Catemoji;
