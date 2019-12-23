export interface TokenValues {
  token: string | undefined;
}

export interface IToken extends TokenValues {
  save(token: string): Promise<void>;
  get(): Promise<string | undefined>;
}
