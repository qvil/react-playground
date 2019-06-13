import { useState, useEffect } from "react";

const useLocalStorage = initialValue => {
  const [storage, setStorage] = useState(initialValue);

  useEffect(() => {
    if (typeof storage === "object") localStorage.setItem("key", storage);
  }, [storage]);

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
    setStorage(value);
  };

  return { storage, setLocalStorage };
};

export default useLocalStorage;
