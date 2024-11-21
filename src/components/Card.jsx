const Card = (props) => {
  return (
    <section
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {props.children}
    </section>
  );
};

export default Card;
