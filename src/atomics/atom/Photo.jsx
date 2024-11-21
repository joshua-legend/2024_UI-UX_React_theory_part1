const Photo = (props) => {
  return (
    <div style={{ width: "140px", height: "140px" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={props.imgSrc}
        alt=""
      />
    </div>
  );
};

export default Photo;
