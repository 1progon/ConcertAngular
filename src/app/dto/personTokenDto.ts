export interface PersonTokenDto {
  guid: string;

  accessToken: string;
  tokenExpire: Date;

  refreshToken: string;

  accessTokenExpire: Date
}
