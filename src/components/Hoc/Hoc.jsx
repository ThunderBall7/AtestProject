
import React, { useState, useEffect } from 'react';

const withApiCall = (WrappedComponent, apiUrl) => {
  return props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          // const datas = JSON.stringify(jsonData)
          setData(jsonData);
          setLoading(false);
          setError(null);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    return <WrappedComponent data={data} loading={loading} error={error} {...props} />;
  };
};

export default withApiCall;
