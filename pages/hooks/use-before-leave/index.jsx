import React, { useEffect } from "react";

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") return;
  const handle = ({ clientY }) => {
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const useBeforeLeavePage = () => {
  const begForLife = () => console.log("Don't leave plaese!");
  useBeforeLeave(begForLife);

  return (
    <div>
      <h1>useBeforeLeavePage</h1>
    </div>
  );
};

export default useBeforeLeavePage;
