import {PaginationDto} from "./PaginationDto";

export interface BaseListingDto<T> {
  items: T[];
  pagination: PaginationDto;
}
