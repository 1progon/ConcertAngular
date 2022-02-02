import {IBaseModel} from "../IBaseModel";
import {ILocationCountry} from "./ILocationCountry";

export interface ITimeZone extends IBaseModel {
  Country: ILocationCountry;

  // NpgsqlPoint? Coordinates

  Comments: string;


  UtcOffset: string;

  UtcDstOffset: string;

  Notes: string;
}
