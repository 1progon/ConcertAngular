import {IAccountBase} from "../IAccountBase";

export interface IPerson extends IAccountBase {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;

  // PersonType Type ;
  isAdmin: boolean;

  // GenderType Gender ;

  birthDate: Date | null;

  photo: string | null;

  // List<PersonCompanies>? Companies ;
  // List<Event.Event>? Events ;
  // List<Venue.Venue>? Venues ;
  //
  // List<Event.Event>? EventFavorites ;
  // List<Event.Event>? EventFollowings ;
  //
  // List<Performer.Performer>? PerformerFavorites ;
  // List<Performer.Performer>? PerformerFollowings ;
}
