import { useState, useEffect } from "react";
import axios from "axios";

const useEnhancedAxios = url => {
  const [state, setState] = useState({ loading: true });

  const render = ({ loading, error, data }) => match =>
    loading
      ? match.loading()
      : error
      ? match.error(error)
      : data
      ? match.data(data)
      : null;

  useEffect(() => {
    axios(url)
      .then(data => setState({ loading: false, data }))
      .catch(error => setState({ loading: false, error }));
  }, [url]);

  return render(state);
};

export default useEnhancedAxios;
