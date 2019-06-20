import { useState } from "react";

const useLocalStorage = key => {
  const [storage, setStorage] = useState(localStorage.getItem(key));

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
    setStorage(value);
  };

  return [storage, setLocalStorage];
};

export default useLocalStorage;
