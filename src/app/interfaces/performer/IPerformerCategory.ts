import {IPerformerSubCategory} from "./IPerformerSubCategory";
import {IBaseModel} from "../IBaseModel";

export interface IPerformerCategory extends IBaseModel {
  description: string;
  image: string;
  inHeader: boolean
  subCategories: IPerformerSubCategory[];
}
