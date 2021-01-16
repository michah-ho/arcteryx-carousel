import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: {}, loading: false });
  const [errState, setErrState] = useState("");

  useEffect(() => {
    const callFetch = async (url) => {
      setState((prevState) => ({ ...prevState, loading: true }));
      const response = await fetch(url).then((res) => res.json()).catch((error) => {
        setErrState(error);
      });
      setState((prevState) => ({
        ...prevState,
        data: response,
        loading: false,
      }));
    };
    callFetch(url);
  }, [url, setState]);

  return { state, setState, errState };
};

export default useFetch;
