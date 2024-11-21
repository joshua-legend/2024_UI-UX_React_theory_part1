import { useState } from "react";
import Count from "./Count";
import Price from "./Price";

const ItemCounter = (props) => {
  const [total, setTotal] = useState(props.init);
  const minus = () => {
    setTotal((prev) => prev - 1);
  };
  const plus = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <>
      <Count minus={minus} plus={plus} total={total} />
      <Price price={props.price} total={total} />
    </>
  );
};

export default ItemCounter;
