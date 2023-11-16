import axios from "axios";
import { useEffect, useState } from "react";
export const proxy = "http://localhost:5000/blog";

// Get Request function
export const useFetch = (endpoint) => {
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `${proxy}/${endpoint}`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(url);

      setDate(response.data.success);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
