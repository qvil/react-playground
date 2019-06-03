import axios from "axios";
import { useState, useEffect } from "react";

export default (options, autoFetch = false, axiosInstance = axios) => {
  if (!options.url) return;

  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState(prev => ({ ...prev, loading: true }));
    setTrigger(Date.now());
  };

  const fetchAxios = async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      axiosInstance(options);
      setState(prev => ({ ...prev, loading: false, data }));
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }));
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchAxios();
    }
  }, [trigger]);

  return { ...state, refetch };
};
