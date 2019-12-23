import { IStorage } from './storage.type';

export class Storage implements IStorage {
  private storage: LocalForage;

  constructor(storage: LocalForage) {
    this.storage = storage;
  }

  async put(key: string, value: unknown) {
    await this.storage.setItem(key, value).catch(() => undefined);
  }

  async get<D>(key: string) {
    return this.storage.getItem<D>(key).catch(() => undefined);
  }

  async delete(key: string) {
    await this.storage.removeItem(key).catch(() => undefined);
  }
}
