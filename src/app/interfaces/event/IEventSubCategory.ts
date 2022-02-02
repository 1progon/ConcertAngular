import {IBaseModel} from "../IBaseModel";
import {IEventCategory} from "./IEventCategory";

export interface IEventSubCategory extends IBaseModel {
  description: string
  categoryId: number;
  category: IEventCategory;
  events: Event[];
}
