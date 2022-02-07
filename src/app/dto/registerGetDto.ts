import {ILocationCountry} from "../interfaces/location/ILocationCountry";
import {IGenderValue} from "../interfaces/person/IGenderValue";
import {CountryPhoneCodeDto} from "./countryPhoneCodeDto";

export interface RegisterGetDto {
  countries: ILocationCountry[];
  genderTypes: IGenderValue[];

  phoneCodes: CountryPhoneCodeDto[];
}
