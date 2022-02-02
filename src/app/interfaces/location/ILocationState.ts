import {IBaseModel} from "../IBaseModel";
import {ILocationCountry} from "./ILocationCountry";
import {ILocationCity} from "./ILocationCity";

export interface ILocationState extends IBaseModel {
  Description: string;


  Abbreviation: string;

  ShortName: string;

  CountryId: number;
  Country: ILocationCountry;

  Cities: ILocationCity[]
}
