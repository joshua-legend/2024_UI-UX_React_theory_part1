import { atomStyle } from "../../style/atomStyle";

const Price = (props) => {
  return (
    <div style={atomStyle.priceStyle}>
      <span>{props.priceTypeName}</span>
      <span>{props.priceTitle}</span>
    </div>
  );
};

export default Price;
