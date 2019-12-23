import { Token } from './Token';
import { TokenValues } from './Token.type';

export const tokenFactory = (values?: Partial<TokenValues>): Token => {
  const { token = undefined } = values || {};
  return new Token({ token });
};
