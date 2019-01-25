export interface JWTAccessTokenInterface {
  aud: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  sub: string;
  scopes: string[];
}


export class JWTAccessToken {
  constructor(
    private _clientId: string,
    private _tokenString: string,
    private _expiresAt: number,
    private _email: string|null = null
  ) {}

  get clientId(): string {
    return this._clientId;
  }

  get tokenString(): string {
    return this._tokenString;
  }

  get expiresAt(): number {
    return this._expiresAt;
  }

  get email(): string | null {
    return this._email;
  }
}
