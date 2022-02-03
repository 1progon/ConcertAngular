import {IBaseModel} from "../IBaseModel";
import {ILocationCountry} from "./ILocationCountry";

export interface ITimeZone extends IBaseModel {
  country: ILocationCountry;

  // npgsqlPoint? coordinates

  comments: string;


  utcOffset: string;

  utcDstOffset: string;

  notes: string;
}
