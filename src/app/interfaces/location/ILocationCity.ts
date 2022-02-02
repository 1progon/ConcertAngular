import {IBaseModel} from "../IBaseModel";
import {ILocationState} from "./ILocationState";
import {IEvent} from "../event/IEvent";
import {IVenue} from "../venue/IVenue";
import {ITimeZone} from "./ITimeZone";

export interface ILocationCity extends IBaseModel {


  IsStateCapital: boolean;
  IsCountryCapital: boolean;

  StateId: number;
  State: ILocationState;


  Description: string;

  Events: IEvent[];
  Venues: IVenue[];

  Iata: string;

  ShortName: string;


  Popular: boolean;

  TimeZone: ITimeZone;
}
