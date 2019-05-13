import React, { useState, useEffect } from "react";
import Axios from "axios";
import useInput from "./useInput";

export function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async url => {
    try {
      const { data } = await Axios.get(url);
      setPayload(data);
    } catch (error) {
      const { data } = error.response;

      setPayload(data);
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
  const nameValidator = value => value.length <= 5;
  const name = useInput("", nameValidator);
  console.log("TCL: Awesome -> name", name);
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");

  return (
    <div>
      <h2>Awesome Hooks</h2>
      <input {...name} placeholder="Max length is 5. Check your console" />
      <h3>Cat</h3>
      {loading && <span>Loading cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} alt="cat" width="320" />}
    </div>
  );
}
