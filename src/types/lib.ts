import { IHttp, HttpResponse, HttpErrorResponse } from '@/lib/http';
import { API } from './api';

export type AppHttp = IHttp<API.Error.Response>;
export type AppHttpResponse<D> = HttpResponse<D, API.Error.Response>;
export type AppHttpErrorResponse = HttpErrorResponse<API.Error.Response>;
