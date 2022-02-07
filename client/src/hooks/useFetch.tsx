import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AllData } from '../interfaces/data.interface';

interface UseFetchProps {
  isData: AllData[];
}

export enum HttpMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
  PATCH = 'patch'
}

const useFetch = (url: string, method: HttpMethods = HttpMethods.GET, body?: object) => {

  const [data, setData] = useState<AllData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    axios({
      method,
      url,
      data: body
    })
      .then((response: { data: AllData[] }) => {
        setData(response.data);
        console.log(response.data, 'wiilil');
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [body, method, url]);
  return { data, loading, error };
};

export default useFetch;
