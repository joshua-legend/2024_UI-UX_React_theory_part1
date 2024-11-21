import { useState } from "react";

const SubscribeButton = () => {
  const [isSub, setIsSub] = useState("구독");
  const change = () => {
    setIsSub((prev) => (prev == "구독" ? "구독🔔" : "구독"));
  };
  return <button onClick={change}>{isSub}</button>;
};

export default SubscribeButton;
