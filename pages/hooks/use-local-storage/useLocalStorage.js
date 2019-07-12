import { useState } from "react";

const useLocalStorage = (key, initialState = localStorage.getItem(key)) => {
  const [storage, setStorage] = useState(initialState);

  const setLocalStorage = value => {
    localStorage.setItem(key, value);
    setStorage(value);
  };

  return [storage, setLocalStorage];
};

export default useLocalStorage;
