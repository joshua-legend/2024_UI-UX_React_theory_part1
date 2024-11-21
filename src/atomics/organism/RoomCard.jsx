import PhotoInfo from "../molecules/PhotoInfo";
import RoomInfo from "../molecules/RoomInfo";

const RoomCard = (props) => {
  return (
    <article style={{ display: "flex", gap: "5px" }}>
      <PhotoInfo {...props} />
      <RoomInfo {...props} />
    </article>
  );
};

export default RoomCard;
