import {IBaseModel} from "../IBaseModel";
import {ICountryPhoneCode} from "../phone/ICountryPhoneCode";
import {ILocationState} from "./ILocationState";
import {IEvent} from "../event/IEvent";

export interface ILocationCountry extends IBaseModel {
  description: string;

  states: ILocationState[]
  events: IEvent[]


  iso2Code: string;
  shortName: string;
  popular: boolean;
  phoneCode: ICountryPhoneCode
}
