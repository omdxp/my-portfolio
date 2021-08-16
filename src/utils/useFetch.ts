import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    setTimeout(() => {
      fetch(url, { signal: signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Not OK");
          }
          return res.json();
        })
        .then((jsonRes) => {
          setData(jsonRes);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
