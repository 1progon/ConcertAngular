import {PersonType} from "../interfaces/person/PersonType";
import {PersonTokenDto} from "./personTokenDto";

export interface PersonShortDto extends PersonTokenDto {
  email: string;

  firstName?: string;
  lastName?: string;

  type: PersonType;

}
