import {IPerformer} from "./IPerformer";
import {IBaseModel} from "../IBaseModel";

export interface IPerformerSubCategory extends IBaseModel {
  description: string;
  image: string;
  inHeader: boolean;
  performers: IPerformer[]
}
