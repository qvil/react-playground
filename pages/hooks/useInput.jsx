import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target: { value } }) => {
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
      console.log("TCL: onChange -> validator(value)", validator(value));
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
