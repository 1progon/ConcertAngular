import {IPagination} from "../interfaces/pagination/IPagination";

export interface BaseListingDto<T> {
  items: T[];
  pagination: IPagination;
}
