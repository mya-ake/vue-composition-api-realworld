import { EntityActionResponse, LoginedUser } from '@/types';

export interface LoginValues {
  readonly email: string;
  readonly password: string;
}

export interface ILogin extends LoginValues {
  authenticate(): Promise<EntityActionResponse<LoginedUser>>;
}
