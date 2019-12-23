import { IToken, TokenValues } from './Token.type';
import { container } from 'tsyringe';
import { AuthenticationRespository } from '@/repositories/authentication';

export class Token implements IToken {
  token: string | undefined;

  constructor({ token }: TokenValues) {
    this.token = token;
  }

  async save() {
    const token = this.token;
    if (!token) {
      return;
    }
    const authenticationRespository = container.resolve(
      AuthenticationRespository,
    );
    await authenticationRespository.saveToken(token);
  }

  async get() {
    const authenticationRespository = container.resolve(
      AuthenticationRespository,
    );
    this.token = await authenticationRespository.getToken();
    return this.token;
  }
}
