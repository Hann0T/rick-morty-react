import React from 'react';

const useFetch = (url) => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const getData = async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    setData(response);
    setIsLoading(false);
  };

  React.useEffect(() => {
    setIsLoading(true);
    getData(url);
  }, [url]);

  return {
    data,
    isLoading,
  };
};

export default useFetch;
