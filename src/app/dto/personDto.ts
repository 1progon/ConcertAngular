import {PersonType} from "../interfaces/person/PersonType";

export interface PersonDto {
  guid: string;
  email: string;

  firstName?: string;
  lastName?: string;

  type: PersonType;

  token: string;
  tokenExpire: Date;

  timestamp: number;
}
