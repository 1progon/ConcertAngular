import {IPerformer} from "../performer/IPerformer";
import {Time} from "@angular/common";
import {IBaseModel} from "../IBaseModel";
import {IEventSubCategory} from "./IEventSubCategory";
import {IVenue} from "../venue/IVenue";

export interface IEvent extends IBaseModel {
  personId: number;
  // Person: Person;

  companyId: number;
  // Company: PersonCompanies[];

  description: string;
  date: Date;
  time: Time;

  performers: IPerformer[];

  active: boolean;
  status: string;

  image: string;


  venueId: number;
  venue: IVenue;


  // List<VenueTicket>? Tickets ;
  // List<VenueParking>? Parking ;

  // List<EventImages>? Images ;

  subCategoryId: number;
  subCategory: IEventSubCategory;

  //  List<Person.Person>? PersonFavorites ;
  //  List<Person.Person>? PersonFollowers ;


  likesCount: number;
  //  List<EventsTag>? Tags ;
  //  List<EventsLike>? Likes ;
}
