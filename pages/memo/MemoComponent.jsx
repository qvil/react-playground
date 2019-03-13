import React from "react";

const MemoComponent = React.memo(props => {
  console.log("Rendered Memo Component");
  return (
    <>
      <h3>MemoComponent</h3>
      <div>{props.text}</div>
    </>
  );
});

export default MemoComponent;
