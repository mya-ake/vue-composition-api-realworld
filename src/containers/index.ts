import 'reflect-metadata';
import { container } from 'tsyringe';
import { httpFactory } from './http';
import { storageFactory } from './storage';
import { HTTP, STORAGE } from './key';

container.register(HTTP, { useValue: httpFactory() });
container.register(STORAGE, { useValue: storageFactory() });
