import { useEffect, useState } from "react";
import { api } from "../services/api";

export type PropsAxios = {
  url: string;
  method: "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
  body?: any | null;
  headers?: any | null;
};

const useAxios = ({ url, method, body = null, headers = null }: PropsAxios) => {
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    // setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await api[method](url, body, { headers });
      setResponse(result.data);
    } catch (err: any) {
      if (err?.response?.status === 401) {
        // sessionStorage.clear();
        // navigate("/login", { state: { from: location }, replace: true });
      } else {
        let errorMessage = err?.response?.data?.message;
        if (Array.isArray(errorMessage)) {
          errorMessage = errorMessage.join(" | ");
        }

        setError(errorMessage || err?.message);
      }
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, loaded, response, error };
};

export default useAxios;