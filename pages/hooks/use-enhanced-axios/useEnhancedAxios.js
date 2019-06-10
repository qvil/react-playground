import { useState, useEffect } from "react";
import axios from "axios";

const useEnhancedAxios = url => {
  const [state, setState] = useState({ loading: true });

  const render = data => match =>
    data.loading
      ? match.loading()
      : data.error
      ? match.error(data.error)
      : data.data
      ? match.data(data.data)
      : null;

  useEffect(() => {
    axios(url)
      .then(data => setState({ loading: false, data }))
      .catch(error => setState({ loading: false, error }));
  }, [url]);

  return render(state);
};

export default useEnhancedAxios;
