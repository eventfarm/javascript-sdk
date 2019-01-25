export class ServerAccessToken {
  constructor(
    private _tokenType: string,
    private _accessToken: string,
    private _expiresAt: number,
    private _refreshToken: string,
    private _userId: string = null,
  ) {}

  get authorizationHeader(): string {
    return this._tokenType + ' ' + this._accessToken;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get expiresAt(): number {
    return this._expiresAt;
  }

  get isExpired(): boolean {
    let currentTime = new Date().getSeconds();
    return currentTime > this._expiresAt;
  }
}
