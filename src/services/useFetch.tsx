/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type UseFetchProps = {
  loading: boolean;
}

type UseFecthFuction = {
  loading: boolean,
  fetch: <T>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

const initialProps: UseFetchProps = {
  loading: false,
};

const useFetch = (
  {
    loading: isLoading,
  }: UseFetchProps | any = initialProps,
): UseFecthFuction => {
  
  const [loading, setLoading] = useState(isLoading);
  const { CancelToken } = axios;
  const { token, cancel } = CancelToken.source();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => cancel('component unmount'), []);

  async function fetch<T>(config: AxiosRequestConfig ) :  Promise<AxiosResponse<T>> {
    setLoading(true);

    const url :string = `${process.env.REACT_APP_API}${config.url}`; 

    try {
      const response: any = await axios({
        cancelToken: token,
        ...config,
        url,
      });

      return new Promise((resolve) => setTimeout(() => {
        setTimeout(() => {
          setLoading(false);
        }, 0);
        return resolve(response);
      }, 2500))
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  };

  return {
    loading,
    fetch,
  };
};

export default useFetch;
