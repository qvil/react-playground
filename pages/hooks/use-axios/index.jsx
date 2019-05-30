import React from "react";
import useAxios from "./useAxios";

const UseAxios = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });

  return (
    <div>
      <h1>UseAxios</h1>
      <h2>{loading && "Loading..."}</h2>
      <h2>{!loading && error && `error : ${error}`}</h2>
      <h2>{!loading && data && `status : ${data.status}`}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default UseAxios;
