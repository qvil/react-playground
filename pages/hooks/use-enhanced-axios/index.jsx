import React from "react";
import useEnhancedAxios from "./useEnhancedAxios";

const useEnhancedAxiosPage = () => {
  const render = useEnhancedAxios(
    "http://dummy.restapiexample.com/api/v1/employees"
  );

  return render({
    loading: () => <div>Loading</div>,
    error: error => <div>{error.toString()}</div>,
    data: data => <div>{JSON.stringify(data)}</div>
  });
};

export default useEnhancedAxiosPage;
