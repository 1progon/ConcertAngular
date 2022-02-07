import {ILocationCountry} from "./location/ILocationCountry";
import {ILocationState} from "./location/ILocationState";
import {ILocationCity} from "./location/ILocationCity";

export interface IAccountBase {
  id: number;
  guid: string;

  active: boolean;
  status: string;

  email: string;
  password: string;
  token: string;
  tokenExpire: Date;
  phone?: string;
  avatar?: string;
  about?: string;

  // Location
  countryId: number;
  country?: ILocationCountry;

  stateId: number;
  state?: ILocationState;

  cityId: number;
  city?: ILocationCity;

  // Address
  zipCode?: string;

  postalCode?: string;
  street?: string;
  houseNumber?: string;
  houseLetter?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
