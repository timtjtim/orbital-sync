import chalk from 'chalk';
import fetchCookie from 'fetch-cookie';
import nodeFetch, { FormData, RequestInfo, RequestInit, Response } from 'node-fetch';
import type { Host } from '../../host/index.js';
import { Log } from '../../log.js';
import { ErrorNotification } from '../../notify/index.js';
import type { ConfigInterfaceV5 } from '../../config/index.js';

export class ClientV6 {
  // private constructor(
  //   private fetch: NodeFetchCookie,
  //   private host: Host,
  //   private token: string,
  //   private options: ConfigInterfaceV5['sync'],
  //   private log: Log
  // ) { }
  // public static async create({
  //   host,
  //   options,
  //   log
  // }: {
  //   host: Host;
  //   options: ConfigInterfaceV5['sync'],
  //   log: Log;
  // }): Promise<ClientV6> {
  //   log.info(chalk.yellow(`➡️ Signing in to ${host.baseUrl}...`));
  //   const fetch = fetchCookie(nodeFetch);
  //   log.error(host.password);
  //   const response = await fetch(`${host.apiUrl}/auth`, {
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({ password: host.password, totp: null }),
  //     method: 'POST'
  //   });
  //   if (response.status !== 200) {
  //     throw new ErrorNotification({
  //       message: `There was an error logging in to "${host.baseUrl}"`,
  //       verbose: {
  //         host: host.baseUrl,
  //         path: host.path,
  //         status: response.status,
  //         responseBody: await response.text()
  //       }
  //     });
  //   }
  //   const token = ((await response.json()) as { session: { csrf: string } }).session.csrf;
  //   // const token = this.parseResponseForToken(host, await response.text());
  //   log.info(chalk.green(`✔️ Successfully signed in to ${host.fullUrl}!`));
  //   return new this(fetch, host, token, options, log);
  // }
  // public async downloadBackup(): Promise<Blob> {
  //   this.log.info(chalk.yellow(`➡️ Downloading backup from ${this.host.fullUrl}...`));
  //   const response = await this.fetch(`${this.host.apiUrl}/teleporter`, {
  //     method: 'GET',
  //     headers: {
  //       'x-csrf-token': this.token
  //     }
  //   });
  //   if (
  //     response.status !== 200 ||
  //     response.headers.get('content-type') !== 'application/zip'
  //   )
  //     throw new ErrorNotification({
  //       message: `Failed to download backup from "${this.host.fullUrl}".`,
  //       verbose: {
  //         host: this.host.baseUrl,
  //         path: this.host.path,
  //         status: response.status,
  //         contenttype: response.headers.get('content-type'),
  //         responseBody: await response.text()
  //       }
  //     });
  //   const data = await response.blob();
  //   this.log.info(chalk.green(`✔️ Backup from ${this.host.baseUrl} completed!`));
  //   this.log.verbose(chalk.dim(`Ⓘ Backup size: ${data.size / 1024} kB`));
  //   return data;
  // }
  // public async uploadBackup(backup: Blob): Promise<true | never> {
  //   this.log.info(chalk.yellow(`➡️ Uploading backup to ${this.host.fullUrl}...`));
  //   const formData = new FormData();
  //   formData.append('import', JSON.stringify({
  //     // @TODO: make this configurable
  //     config: true,
  //     dhcp_leases: true,
  //     gravity: {
  //       group: true,
  //       adlist: true,
  //       adlist_by_group: true,
  //       domainlist: true,
  //       domainlist_by_group: true,
  //       client: true,
  //       client_by_group: true,
  //     },
  //   }));
  //   const date = (new Date()).toISOString().replaceAll(':', '-');
  //   const filename = `orbital-sync_teleporter_${date}.zip`;
  //   this.log.verbose(chalk.dim(`Ⓘ Uploading: ${filename}`));
  //   formData.append('file', backup, filename);
  //   const uploadResponse = await this.fetch(
  //     `${this.host.apiUrl}/teleporter`,
  //     {
  //       body: formData,
  //       method: 'POST',
  //       headers: {
  //         'x-csrf-token': this.token,
  //       },
  //     },
  //   );
  //   const uploadText = await uploadResponse.text();
  //   if (
  //     uploadResponse.status !== 200
  //   )
  //     throw new ErrorNotification({
  //       message: `Failed to upload backup to "${this.host.fullUrl}".`,
  //       verbose: {
  //         host: this.host.baseUrl,
  //         path: this.host.path,
  //         status: uploadResponse.status,
  //       }
  //     });
  //   this.log.info(chalk.green(`✔️ Backup uploaded to ${this.host.fullUrl}!`));
  //   this.log.verbose(`Result:\n${chalk.blue(uploadText)}`);
  //   return true;
  // }
  // public async updateGravity(): Promise<true | never> {
  //   this.log.info(chalk.yellow(`➡️ Updating gravity on ${this.host.fullUrl}...`));
  //   const gravityUpdateResponse = await this.fetch(
  //     `${this.host.apiUrl}/action/gravity`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'x-csrf-token': this.token,
  //       },
  //     },
  //   );
  //   if (
  //     gravityUpdateResponse.status !== 200
  //   ) {
  //     throw new ErrorNotification({
  //       message: `Failed updating gravity on "${this.host.fullUrl}".`,
  //       verbose: {
  //         host: this.host.baseUrl,
  //         path: this.host.path,
  //         status: gravityUpdateResponse.status,
  //         body: gravityUpdateResponse.text(),
  //       }
  //     });
  //   }
  //   this.log.info(chalk.green(`✔️ Gravity updated on ${this.host.fullUrl}!`));
  //   this.log.verbose(`Result:\n${chalk.blue(gravityUpdateResponse.body)}`);
  //   return true;
  // }
}

type NodeFetchCookie = ReturnType<typeof fetchCookie<RequestInfo, RequestInit, Response>>;
