export interface RestClientInterface {
  get(path: string, queryParameters: any, headers?: Headers, options?: any, timeoutSeconds?: number): any;
  post(path: string, formParameters: any, headers?: Headers, options?: any, timeoutSeconds?: number): any;
  postMultipart(path: string, formParameters: any, headers?: Headers, options?: any, timeoutSeconds?: number): any;
}
