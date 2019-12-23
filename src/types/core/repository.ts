import { ErrorItem } from './error';

export interface RepositoryOkResponse<D> {
  ok: true;
  data: D;
  errors: [];
}

export interface RepositoryErrorResponse {
  ok: false;
  data: undefined;
  errors: ErrorItem[];
}

export type RepositoryResponse<D> =
  | RepositoryOkResponse<D>
  | RepositoryErrorResponse;
