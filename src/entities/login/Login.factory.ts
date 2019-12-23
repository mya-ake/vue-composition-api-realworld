import { Login } from './Login';
import { LoginValues } from './Login.type';

export const loginFactory = (values?: Partial<LoginValues>): Login => {
  const { email = '', password = '' } = values || {};
  return new Login({ email, password });
};
