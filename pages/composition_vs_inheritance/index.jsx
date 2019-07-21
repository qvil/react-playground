import FancyBorder from "./FancyBorder";
import FancyHeader from "./FancyHeader";

const index = () => {
  return (
    <div>
      <FancyHeader left={<div>Left</div>} right={<div>Right</div>} />
      <FancyBorder color="red">
        <h1>composition_vs_inheritance</h1>
        <p>Look at the Fancy border!</p>
      </FancyBorder>
    </div>
  );
};

export default index;
