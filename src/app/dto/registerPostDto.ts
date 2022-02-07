/**
 * @interface
 * @property {string} email
 */
export interface RegisterPostDto {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  countryId?: number;
  stateId?: number;
  cityId?: number;
  genderValue?: number;
}
