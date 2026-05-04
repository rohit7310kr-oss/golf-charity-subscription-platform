import { useEffect, useState } from "react";

const useFetchData = function (fetchAPI, dependencies) {
  const [data, setData] = useState({ data: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleFetchRequest() {
      try {
        setLoading(true);
        const response = await fetchAPI();
        setData(response.data);
      } catch (err) {
        // console.log(err);
      } finally {
        setLoading(false);
      }
    }

    handleFetchRequest();
  }, [dependencies]);

  return { data, loading };
};

export default useFetchData;
