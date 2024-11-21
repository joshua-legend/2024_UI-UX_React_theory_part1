import { useState } from "react";

const Button = () => {
  const [apple, setApple] = useState("🍎");

  const change = () => {
    setApple(() => {
      return apple == "🍌" ? "🍎" : "🍌";
    });
  };

  return <button onClick={change}>{apple}</button>;
};

export default Button;
