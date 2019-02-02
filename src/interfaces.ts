export interface StringField {
  [key: string]: any;
}

export interface RestClientInterface {
  get(
    path: string,
    queryParameters: StringField,
    headers?: StringField,
    options?: StringField,
    timeoutSeconds?: number,
  ): Promise<any>;

  post(
    path: string,
    formParameters: StringField,
    headers?: StringField,
    options?: StringField,
    timeoutSeconds?: number,
  ): Promise<any>;

  postMultipart(
    path: string,
    formParameters: StringField,
    headers?: StringField,
    options?: StringField,
    timeoutSeconds?: number,
  ): Promise<any>;
}
