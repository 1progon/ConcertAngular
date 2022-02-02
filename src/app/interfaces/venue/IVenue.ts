import {IBaseModel} from "../IBaseModel";
import {ILocationCountry} from "../location/ILocationCountry";
import {ILocationState} from "../location/ILocationState";
import {ILocationCity} from "../location/ILocationCity";
import {IPerson} from "../person/IPerson";
import {IEvent} from "../event/IEvent";

export interface IVenue extends IBaseModel {
  countryId: number;
  country: ILocationCountry;

  stateId: number;
  state: ILocationState;

  cityId: number;
  city: ILocationCity;

  personOwnerId: number;
  personOwner: IPerson;

  companyOwnerId: number;
  // PersonCompanies? CompanyOwner ;

  description: string;
  article: string;

  image: string;


  zipCode: string;


  postalCode: string

  street: string
  houseNumber: string
  houseLetter: string

  // coordinates: string;

  capacity: string
  squareSize: number;

  nearWater: boolean;

  opened: Date;

  phone1: string;
  phone2: string;
  phone3: string;
  otherPhones: string;

  // List<VenueWorkTime>? WorkTime ;

  events: IEvent[];
  // List<VenueParking>? Parking ;

  type: string;

  // List<VenueImages>? Images ;
  // List<VenueZones>? Zones ;
}
