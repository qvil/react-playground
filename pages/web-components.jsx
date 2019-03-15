import React from "react";

const BrickFlipbox = () => {
  return (
    <brick-flipbox class="demo">
      <div>front</div>
      <div>back</div>
    </brick-flipbox>
  );
};

const WebComponents = ({ name = "qvil" }) => {
  return (
    <div>
      Hello <x-search>{name}</x-search>!{BrickFlipbox()}
    </div>
  );
};

export default WebComponents;
