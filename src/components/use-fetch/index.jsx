import { useEffect, useState } from 'react';

export default function useFetch(url, options = {}) {
  // 3 states (one to store the data from api, one to manage loading and one to mantain any errors and save them)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setErrorMsg(null);
      setLoading(false);
    } catch (e) {
      setErrorMsg(`${e}. an error occured, please try again`);

      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, errorMsg, loading }; // return in the end all three states
}
