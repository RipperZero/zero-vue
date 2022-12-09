/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import qs from "qs";

import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { IStringifyOptions } from "qs";

interface Result<T> {
  success: boolean;
  messages: Array<{ id: string; message: string }>;
  data: T;
}

interface RequestConfig extends AxiosRequestConfig {
  /**
   * @param indices
   * qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
   * 'a[0]=b&a[1]=c'
   * @param brackets
   * qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
   * 'a[]=b&a[]=c'
   * @param repeat
   * qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
   * 'a=b&a=c'
   * @param comma
   * qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'comma' })
   * 'a=b,c'
   */
  arrayFormat?: IStringifyOptions["arrayFormat"];
}

interface _AxiosInstance extends AxiosInstance {
  get: <T = any, R = Result<T>>(
    url: string,
    params?: Record<string, unknown>,
    config?: RequestConfig,
  ) => Promise<R>;

  post: <T = any, R = Result<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<R>;

  delete: <T = any, R = Result<T>>(
    url: string,
    params?: Record<string, unknown>,
    config?: RequestConfig,
  ) => Promise<R>;

  put: <T = any, R = Result<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<R>;

  all?: <T>(values: Array<T | Promise<T>>) => Promise<T[]>;
}

/**
 * request interceptor
 */
const interceptRequest = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    // do something
    return config;
  });
};

/**
 * response interceptor
 */
const interceptResponse = (instance: AxiosInstance) => {
  instance.interceptors.response.use((res) => {
    return res.data;
  });
};

/**
 *  convert request
 */
const setRequestProxy = (instance: AxiosInstance) => {
  const _get = instance.get;
  const _delete = instance.delete;

  const appendParamsToUrl = (
    url: string,
    params?: Record<string, unknown>,
    arrayFormat?: RequestConfig["arrayFormat"],
  ) => {
    return `${url}${qs.stringify(params, {
      addQueryPrefix: true,
      arrayFormat: arrayFormat ?? "repeat",
    })}`;
  };

  instance.get = async (
    url: string,
    params?: Record<string, unknown>,
    config?: RequestConfig,
  ) => {
    let axiosRequestConfig: AxiosRequestConfig | undefined;

    if (config !== undefined) {
      const { arrayFormat, ...restConfig } = config;
      axiosRequestConfig = restConfig;
    }

    return await _get(
      appendParamsToUrl(url, params, config?.arrayFormat),
      axiosRequestConfig,
    );
  };

  instance.delete = async (
    url: string,
    params?: Record<string, unknown>,
    config?: RequestConfig,
  ) => {
    let axiosRequestConfig: AxiosRequestConfig | undefined;

    if (config !== undefined) {
      const { arrayFormat, ...restConfig } = config;
      axiosRequestConfig = restConfig;
    }

    return await _delete(
      appendParamsToUrl(url, params, config?.arrayFormat),
      axiosRequestConfig,
    );
  };
};

const createInstance = () => {
  const axiosInstance = axios.create({
    // FIXME get value from env config
    // timeout: 99999,
    baseURL: "https://reqres.in",
    headers: {
      "Content-Type": "application/json",
    },
  });

  interceptRequest(axiosInstance);
  interceptResponse(axiosInstance);
  setRequestProxy(axiosInstance);

  return axiosInstance as _AxiosInstance;
};

export const axiosInstance = createInstance();
