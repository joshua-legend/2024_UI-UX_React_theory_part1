import { moleculeStyle } from "../../style/moleculeStyle";
import Desc from "../atom/Desc";
import Plus from "../atom/Plus";
import Price from "../atom/Price";
import Title from "../atom/Title";
import TypeName from "../atom/TypeName";

const RoomInfo = (props) => {
  return (
    <div style={moleculeStyle.roominfoStyle}>
      <Price
        priceTypeName={props.priceTypeName}
        priceTitle={props.priceTitle}
      />
      <TypeName roomTypeName={props.roomTypeName} />
      <Title roomTitle={props.roomTitle} />
      <Desc roomDesc={props.roomDesc} />
      <Plus />
    </div>
  );
};

export default RoomInfo;
