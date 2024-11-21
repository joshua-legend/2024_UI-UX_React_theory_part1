import { useState } from "react";

const LikeButton = () => {
  const [isLike, setIsLike] = useState("좋아요");
  const change = () => {
    setIsLike((prev) => (prev == "좋아요" ? "좋아요💛" : "좋아요"));
  };
  return <button onClick={change}>{isLike}</button>;
};

export default LikeButton;
