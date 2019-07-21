const FancyHeader = ({ left, right }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>{left}</div>
      <div style={{ flex: 1, textAlign: "center" }}>FancyHeader</div>
      <div>{right}</div>
    </div>
  );
};

export default FancyHeader;
