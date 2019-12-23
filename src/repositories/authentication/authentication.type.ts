import { API, RepositoryResponse } from '@/types';

export interface IAuthenticationRespository {
  login(
    params: API.Authentication.LoginRequest['user'],
  ): Promise<RepositoryResponse<API.Authentication.Response>>;

  saveToken(token: string): Promise<void>;

  getToken(): Promise<string | undefined>;
}
