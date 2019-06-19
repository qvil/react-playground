import React, { useState, useEffect } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const index = () => {
  const handleNetworkChange = onLine => {
    console.log(onLine ? "onLine" : "offLine");
  };
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>use Network</h1>
      <p>{onLine ? "onLine" : "offLine"}</p>
    </div>
  );
};

export default index;
