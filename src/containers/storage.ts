import localforage from 'localforage';
import { Storage } from '@/lib/storage';

export const storageFactory = () => {
  const storage = localforage.createInstance({ name: 'app' });
  return new Storage(storage);
};
