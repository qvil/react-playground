import React, { useState, useEffect } from "react";
import Axios from "axios";

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

export function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async url => {
    try {
      const { data } = await Axios.get(url);
      // throw Error();
      setPayload(data);
    } catch (error) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl(url);
  }, []);

  return { payload, loading, error };
}

export default function Awesome() {
  const name = useInput("");
  console.log("TCL: Awesome -> name", name);
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");

  return (
    <div>
      <h2>Awesome Hooks</h2>
      <input {...name} placeholder="Check your console" />
      <h3>Cat</h3>
      {loading && <span>Loading cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} alt="cat" width="320" />}
    </div>
  );
}
