import {
  AppHttpResponse,
  HttpOkResponse,
  AppHttpErrorResponse,
  HttpNoResponse,
  HttpCancelResponse,
  RepositoryResponse,
  RepositoryOkResponse,
  RepositoryErrorResponse,
  ErrorItem,
  API,
} from '@/types';

const convertApiErrorDataToErrorItem = (
  responseErrors: API.Error.Response,
): ErrorItem[] => {
  const errors: ErrorItem[] = Object.entries(responseErrors.errors).map(
    ([code, messages]) => {
      const error: ErrorItem = {
        code,
        message: [code, messages[0]].join(' '), // １つ目だけ利用（まだ全体が見えてない）
      };
      return error;
    },
  );
  return errors;
};

const convertHttpOkResponseToRepositoryOkResponse = <D>(
  httpResponse: HttpOkResponse<D>,
): RepositoryOkResponse<D> => {
  const response: RepositoryOkResponse<D> = {
    ok: true,
    data: httpResponse.data,
    errors: [],
  };
  return response;
};

const convertHttpErrorResponseToRepositoryErrorResponse = (
  httpResponse: AppHttpErrorResponse | HttpNoResponse | HttpCancelResponse,
): RepositoryErrorResponse => {
  const response: RepositoryErrorResponse = {
    ok: false,
    data: undefined,
    errors: [],
  };
  if (httpResponse.canceled) {
    response.errors.push({ code: 'cancel', message: 'request cancel' });
  } else if (httpResponse.noResponse) {
    response.errors.push({ code: 'network', message: 'network error' });
  } else {
    response.errors = convertApiErrorDataToErrorItem(httpResponse.data);
  }
  return response;
};

export const convertHttpResponseToRepositoryResponse = <D>(
  httpResponse: AppHttpResponse<D>,
): RepositoryResponse<D> => {
  return httpResponse.ok
    ? convertHttpOkResponseToRepositoryOkResponse<D>(httpResponse)
    : convertHttpErrorResponseToRepositoryErrorResponse(httpResponse);
};
