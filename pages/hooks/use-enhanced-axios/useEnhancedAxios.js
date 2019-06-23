import { useState, useEffect } from "react";
import axios from "axios";

const useEnhancedAxios = (url, autoFetch = true) => {
  const [state, setState] = useState({ loading: false });

  const render = ({ loading, error, data }) => match =>
    loading
      ? match.loading()
      : error
      ? match.error(error)
      : data
      ? match.data(data)
      : null;

  useEffect(() => {
    if (autoFetch) {
      setState({ loading: true });
      axios(url)
        .then(data => setState({ loading: false, data }))
        .catch(error => setState({ loading: false, error }));
    }
  }, [url, autoFetch]);

  return render(state);
};

export default useEnhancedAxios;
