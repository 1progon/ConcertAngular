import {IBaseModel} from "../IBaseModel";

export interface IPerformer extends IBaseModel {
  description: string;
  article: string;
  image: string;

  // List<Event.Event>? Events ;
  // List<PerformerImages>? Images ;
  Type: string;

  subCategoryId: number;
  // PerformerSubCategory SubCategory
  // List<VenueTicket>? Tickets ;
  // List<VenueParking>? Parking ;

  popular: boolean;
  birthDate: Date;
  likes: number;
  members: IPerformer[];
  parentId: number;
  parent: IPerformer;

  // List<Person.Person>? PersonFavorites ;
  // List<Person.Person>? PersonFollowers ;
}
