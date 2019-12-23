export interface IStorage {
  put(key: string, value: unknown): Promise<void>;
  get<D>(key: string): Promise<D | undefined>;
  delete(key: string): Promise<void>;
}
