import { loginFactory, LoginValues, tokenFactory } from '@/entities';
import { DomainServiceResponse, LoginedUser } from '@/types';

export const loginService = async (
  values: LoginValues,
): Promise<DomainServiceResponse<LoginedUser>> => {
  const login = loginFactory(values);
  const response = await login.authenticate();
  if (response.ok) {
    const token = tokenFactory(response.data);
    await token.save();
  }
  return response;
};
