import axios from "axios";
import { useState, useEffect } from "react";

export default (options, axiosInstance = axios) => {
  if (!options.url) return;

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};
