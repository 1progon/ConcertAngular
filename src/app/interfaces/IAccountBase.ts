export interface IAccountBase {
  id: number;

  active: boolean;
  status: string;

  email: string;
  password: string;
  token: string;
  tokenExpire: Date;
  phone: string | null;
  avatar: string | null;
  about: string | null;

  // Location
  countryId: number;
  // LocationCountry? Country

  stateId: number;
  // LocationState? State

  cityId: number;
  // LocationCity? City

  // Address

  zipCode: string | null;

  postalCode: string | null;
  street: string | null;
  houseNumber: string | null;
  houseLetter: string | null;

  createdAt: Date | null;
  updatedAt: Date | null;
}
