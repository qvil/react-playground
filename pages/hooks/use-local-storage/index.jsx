import React from "react";
import useLocalStorage from "./useLocalStorage";

const index = () => {
  const [_favorite, setFavorite] = useLocalStorage("favorite");
  const handleClick = e => {
    const favorite = localStorage.getItem("favorite");
    localStorage.setItem("favorite", favorite === "on" ? "off" : "on");
  };

  return (
    <div>
      <h1>useLocalStorage</h1>
      <h2>Not rendered click toggle button</h2>
      <button onClick={handleClick}>Toggle localStorage.setItem</button>
      <p>Favorite : {localStorage.getItem("favorite")}</p>
      <h2>Rendered click toggle button</h2>
      <button onClick={() => setFavorite(_favorite === "on" ? "off" : "on")}>
        Toggle useLocalStorage
      </button>
      <p>Favorite : {_favorite}</p>
    </div>
  );
};

export default index;
