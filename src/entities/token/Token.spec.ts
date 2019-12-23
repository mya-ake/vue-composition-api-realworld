import { Token } from './Token';
import { tokenFactory } from './Token.factory';

describe('entities/token', () => {
  describe('factory', () => {
    it('Tokenのインスタンスが生成される', () => {
      const token = tokenFactory();
      expect(token).toBeInstanceOf(Token);
    });
  });

  describe('save method', () => {
    it.todo('成功時');
  });

  describe('get method', () => {
    it.todo('成功時');
  });
});
