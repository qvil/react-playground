import React, { useState } from "react";
import useEnhancedAxios from "./useEnhancedAxios";

const useEnhancedAxiosPage = () => {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const render = useEnhancedAxios(
    "http://dummy.restapiexample.com/api/v1/employees",
    fetchTrigger
  );

  return (
    <div>
      <h1>useEnhancedAxios</h1>
      <button onClick={() => setFetchTrigger(true)}>Fetch</button>
      {render({
        loading: () => <div>Loading</div>,
        error: error => <div>{error.toString()}</div>,
        data: data => <div>{JSON.stringify(data)}</div>
      })}
    </div>
  );
};

export default useEnhancedAxiosPage;
