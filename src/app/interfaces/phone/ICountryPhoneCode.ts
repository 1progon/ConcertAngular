import {ILocationCountry} from "../location/ILocationCountry";

export interface ICountryPhoneCode {
  id: number;
  code: string;
  format: string;
  countryId: number;
  country: ILocationCountry
}
