import { injectable, inject } from 'tsyringe';
import { IAuthenticationRespository } from './authentication.type';
import { HTTP, STORAGE } from '@/containers/key';
import { convertHttpResponseToRepositoryResponse } from '@/utils/converters';
import { AppHttp, API, IStorage } from '@/types';

const TOKEN_KEY = 'token';

@injectable()
export class AuthenticationRespository implements IAuthenticationRespository {
  constructor(
    @inject(HTTP) private http: AppHttp,
    @inject(STORAGE) private storage: IStorage,
  ) {}

  async login(params: API.Authentication.LoginRequest['user']) {
    const data: API.Authentication.LoginRequest = {
      user: { ...params },
    };
    const response = await this.http.request<API.Authentication.Response>({
      url: 'api/users/login',
      method: 'post',
      data,
    });
    return convertHttpResponseToRepositoryResponse(response);
  }

  async saveToken(token: string) {
    await this.storage.put(TOKEN_KEY, token);
  }

  async getToken() {
    return this.storage.get<string>(TOKEN_KEY);
  }
}
