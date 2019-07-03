import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default (options, fetchTrigger = false, axiosInstance = axios) => {
  if (!options.url) return;

  const [state, setState] = useState({
    fetchTrigger,
    loading: fetchTrigger,
    error: null,
    data: null
  });

  const fetchAxios = useCallback(async () => {
    setState({ ...state, loading: true });
    try {
      const data = await axiosInstance(options);
      setState({ ...state, loading: false, data });
    } catch (error) {
      setState({ ...state, loading: false, error });
    }
  }, [options]);

  useEffect(() => {
    if (fetchTrigger) {
      fetchAxios();
    }
  }, [fetchTrigger]);

  return { ...state };
};
