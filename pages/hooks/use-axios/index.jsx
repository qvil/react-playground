import React, { useState } from "react";
import useAxios from "./useAxios";

const UseAxios = () => {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const { loading, error, data } = useAxios(
    {
      url: "http://ddragon.leagueoflegends.com/api/versions.json"
    },
    fetchTrigger
  );

  const refetch = () => {
    setFetchTrigger(true);
  };

  return (
    <div>
      <h1>UseAxios</h1>
      <h2>{loading && "Loading..."}</h2>
      <h2>{!loading && error && `error : ${error}`}</h2>
      <h2>{!loading && data && `status : ${data.status}`}</h2>
      <p>{!loading && data && `data : ${data.data}`}</p>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default UseAxios;
