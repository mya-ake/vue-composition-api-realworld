import { Login } from './Login';
import { loginFactory } from './Login.factory';

describe('entities/login', () => {
  describe('factory', () => {
    it('Loginのインスタンスが生成される', () => {
      const login = loginFactory();
      expect(login).toBeInstanceOf(Login);
    });
  });

  describe('authenticate method', () => {
    it.todo('成功時');
    it.todo('失敗時');
  });
});
