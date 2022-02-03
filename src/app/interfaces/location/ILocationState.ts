import {IBaseModel} from "../IBaseModel";
import {ILocationCountry} from "./ILocationCountry";
import {ILocationCity} from "./ILocationCity";

export interface ILocationState extends IBaseModel {
  description: string;


  abbreviation: string;

  shortName: string;

  countryId: number;
  country: ILocationCountry;

  cities: ILocationCity[]
}
