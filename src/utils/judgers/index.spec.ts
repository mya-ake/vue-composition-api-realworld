import * as judgers from './index';

describe('utils/judgers', () => {
  describe('isOutSideLink', () => {
    const { isOutSideLink } = judgers;

    it.each`
      url                      | expected
      ${''}                    | ${false}
      ${'/'}                   | ${false}
      ${'http://example.com'}  | ${true}
      ${'https://example.com'} | ${true}
    `(`'$url' is $expected`, ({ url, expected }) => {
      const result = isOutSideLink(url);
      expect(result).toBe(expected);
    });
  });
});
