import { promises as fs } from 'fs';

export const doesFileExists = async (path: string) => !!(await fs.stat(path).catch((e) => false));

export const getFiles = async (path: string) => {};
