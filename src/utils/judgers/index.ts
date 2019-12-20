export const isOutSideLink = (url: string) => {
  return /^https?:\/\//.test(url);
};
