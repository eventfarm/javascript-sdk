import axios, { AxiosPromise } from 'axios';
import { RestClientInterface, StringField } from '../Interfaces';
export class AxiosRestClient implements RestClientInterface {
  axiosInstance = axios.create({
    baseURL: this.basePath, // Replace with your API base URL
  });

  constructor(private basePath: string, private interceptor?: any) {
    // Add interceptor
    if (this.interceptor) {
      this.axiosInstance.interceptors.request.use(this.interceptor);
    }
  }

  get(
    path: string,
    queryParameters: any,
    headers?: any,
    options?: any,
    timeoutSeconds?: number,
  ): AxiosPromise {
    return this.axiosInstance({
      method: 'GET',
      url: this.makeUrl(path),
      headers: headers,
      params: queryParameters,
    });
  }

  post(
    path: string,
    formParameters: any,
    headers?: any,
    options?: any,
    timeoutSeconds?: number,
  ): AxiosPromise {
    return this.axiosInstance({
      method: 'POST',
      url: this.makeUrl(path),
      data: formParameters,
      headers: headers,
    });
  }

  postMultipart(
    path: string,
    formParameters: any,
    headers?: any,
    options?: any,
    timeoutSeconds?: number,
  ): AxiosPromise {
    throw Error('Implement Post Multipart');
  }

  private makeUrl(path: string): string {
    return this.basePath + '/' + path;
  }
}
