import {IBaseModel} from "../IBaseModel";
import {IEventSubCategory} from "./IEventSubCategory";

export interface IEventCategory extends IBaseModel {
  id: number;
  description: string;
  image: string;

  inHeader: boolean;

  subCategories: IEventSubCategory[]
}
