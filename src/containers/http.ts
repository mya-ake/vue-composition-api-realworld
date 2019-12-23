import ky from 'ky';
import { Http } from '@/lib/http';
import { API_URL } from '@/configs/env';
import { AppHttp, API } from '@/types';

export const httpFactory = (): AppHttp => {
  const client = ky.create({
    prefixUrl: API_URL,
    throwHttpErrors: false,
  });

  const http: AppHttp = new Http<API.Error.Response>(client);
  return http;
};
