import axios, { AxiosPromise } from 'axios';

import { RestClientInterface } from './RestClientInterface';

export class AxiosRestClient implements RestClientInterface {
    constructor(
        private basePath: string
    ) {
    }

    get(path: string, queryParameters: any, headers?: any, options?: any, timeoutSeconds?: number): AxiosPromise {
        return axios({
            method: 'GET',
            url: this.makeUrl(path),
            headers: headers,
            params: queryParameters,
        });
    }

    post(path: string, formParameters: any, headers?: any, options?: any, timeoutSeconds?: number): AxiosPromise {
        // headers['Content-Type'] = 'application/json';
        return axios({
            method: 'POST',
            url: this.makeUrl(path),
            data: formParameters,
            headers: headers,
        });
    }

    postMultipart(path: string, formParameters: any, headers?: any, options?: any, timeoutSeconds?: number): AxiosPromise {
        throw Error('Implement Post Multipart');
    }

    private makeUrl(path: string): string {
        return this.basePath + '/' + path;
    }
}
