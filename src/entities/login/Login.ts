import { ILogin, LoginValues } from './Login.type';
import { container } from 'tsyringe';
import { AuthenticationRespository } from '@/repositories/authentication';
import { EntityActionResponse, LoginedUser } from '@/types';

export class Login implements ILogin {
  readonly email: string;
  readonly password: string;

  constructor({ email, password }: LoginValues) {
    this.email = email;
    this.password = password;
  }

  async authenticate(): Promise<EntityActionResponse<LoginedUser>> {
    const authenticationRespository = container.resolve(
      AuthenticationRespository,
    );
    const response = await authenticationRespository.login({
      email: this.email,
      password: this.password,
    });
    if (!response.ok) {
      return response;
    }
    const { user } = response.data;
    return {
      ...response,
      data: user,
    };
  }
}
