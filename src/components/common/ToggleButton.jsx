import { useState } from "react";

const ToggleButton = (props) => {
  const [isToggle, setIsToggle] = useState(props.text);
  const change = () => {
    setIsToggle((prev) =>
      prev == props.text ? props.text + props.emoji : props.text
    );
  };
  return <button onClick={change}>{isToggle}</button>;
};

export default ToggleButton;
