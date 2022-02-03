import {IBaseModel} from "../IBaseModel";
import {ILocationState} from "./ILocationState";
import {IEvent} from "../event/IEvent";
import {IVenue} from "../venue/IVenue";
import {ITimeZone} from "./ITimeZone";

export interface ILocationCity extends IBaseModel {


  isStateCapital: boolean;
  isCountryCapital: boolean;

  stateId: number;
  state: ILocationState;


  description: string;

  events: IEvent[];
  venues: IVenue[];

  iata: string;

  shortName: string;


  popular: boolean;

  timeZone: ITimeZone;
}
