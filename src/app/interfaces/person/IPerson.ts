import {IAccountBase} from "../IAccountBase";
import {PersonType} from "./PersonType";

export interface IPerson extends IAccountBase {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;

  type: PersonType;
  isAdmin: boolean;

  gender: string;

  birthDate: Date | null;

  photo: string | null;

  // list<personCompanies>? companies ;
  // list<eventEvent>? events ;
  // list<venueVenue>? venues ;
  //
  // list<eventEvent>? eventFavorites ;
  // list<eventEvent>? eventFollowings ;
  //
  // list<performerPerformer>? performerFavorites ;
  // list<performerPerformer>? performerFollowings ;
}
