import { Host } from '../index.js';

export class HostV6 extends Host {
  apiUrl: string;

  constructor({
    baseUrl,
    password,
    path
  }: {
    baseUrl: string;
    password: string;
    path?: string;
  }) {
    super({ baseUrl, password, path });

    this.apiUrl = `${this.fullUrl}/api`;
  }
}
