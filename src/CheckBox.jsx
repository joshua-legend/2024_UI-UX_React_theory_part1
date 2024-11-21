const CheckBox = (props) => {
  return (
    <div
      onClick={props.change}
      style={{
        padding: "10px",
        width: "fit-content",
        borderRadius: "9999px",
        border: "1px solid black",
        backgroundColor: props.checked ? "yellow" : "white",
      }}
    >
      ✅
    </div>
  );
};

export default CheckBox;
