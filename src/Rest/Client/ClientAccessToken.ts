import * as jwtDecode from 'jwt-decode';
import { JWTAccessTokenInterface } from '../JWTAccessToken';

export interface AccessTokenInterface {
  readonly clientId: string,
  readonly accessToken: string,
  readonly expiresAt: number,
  readonly userId: string | null;
  readonly tokenString: string;
}

export class ClientAccessToken implements AccessTokenInterface {
  public readonly tokenString: string;
  public readonly userId: string | null;

  constructor(
    public readonly clientId: string,
    public readonly accessToken: string,
    public readonly expiresAt: number,
    userId: string | null = null
  ) {
    this.userId = userId;
    this.tokenString = `Bearer ${this.accessToken}`;
  }

  public static createFromJsonObject(json: AccessTokenInterface): ClientAccessToken {
    return new ClientAccessToken(json.clientId, json.accessToken, json.expiresAt, json.userId);
  }

  public static createFromJWTString(jwtString: string): ClientAccessToken {
    const token: JWTAccessTokenInterface = jwtDecode(jwtString);
    return new ClientAccessToken(token.aud, token.jti, token.exp, token.sub);
  }

  isValid(): boolean {
    const timestamp = Math.floor(Date.now() / 1000);
    return timestamp < this.expiresAt;
  }
}
