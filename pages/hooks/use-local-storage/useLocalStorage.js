import { useState, useEffect } from "react";

const useLocalStorage = (key, initialState) => {
  if (typeof key !== "string" || typeof initialState !== "string") return false;

  const [storage, setStorage] = useState(initialState);

  useEffect(() => {
    setLocalStorage(localStorage.getItem(key) || initialState);
  }, []);

  const setLocalStorage = value => {
    localStorage.setItem(key, value);
    setStorage(value);
  };

  return [storage, setLocalStorage];
};

export default useLocalStorage;
