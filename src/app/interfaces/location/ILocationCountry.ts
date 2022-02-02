import {IBaseModel} from "../IBaseModel";
import {ICountryPhoneCode} from "../phone/ICountryPhoneCode";
import {ILocationState} from "./ILocationState";
import {IEvent} from "../event/IEvent";

export interface ILocationCountry extends IBaseModel {
  Description: string;

  States: ILocationState[]
  Events: IEvent[]


  Iso2Code: string;
  ShortName: string;
  Popular: boolean;
  PhoneCode: ICountryPhoneCode
}
