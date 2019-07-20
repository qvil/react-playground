import React from "react";

const FancyBorder = ({ color, children }) => (
  <div style={{ border: `1px solid ${color}`, padding: 16 }}>{children}</div>
);

const index = () => {
  return (
    <div>
      <FancyBorder color="red">
        <h1>composition_vs_inheritance</h1>
        <p>Look at the Fancy border!</p>
      </FancyBorder>
    </div>
  );
};

export default index;
