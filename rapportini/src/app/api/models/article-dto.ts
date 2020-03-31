/* tslint:disable */
import { MeasureUnitDto } from './measure-unit-dto';
import { TagDto } from './tag-dto';
import { TaxTypeDto } from './tax-type-dto';
export interface ArticleDto {
  code?: null | string;
  consumable?: boolean;
  creationDate?: string;
  description?: null | string;
  eanCode?: null | string;
  identity?: null | string;
  ignoreDiscounts?: boolean;
  installationComponent?: boolean;
  installationRoot?: boolean;
  lastModifyDate?: null | string;
  lastPurchasePrice?: number;
  leadTime?: number;
  maxDiscount?: null | number;
  measureUnit?: null | MeasureUnitDto;
  minSellPrice?: null | number;
  notes?: null | string;
  packageQuantity?: number;
  purchasePrice?: number;
  reorderPoint?: number;
  sellPrice?: number;
  shortDescription?: null | string;
  supplierPriceListPrice?: number;
  tags?: null | Array<TagDto>;
  tax?: null | TaxTypeDto;
}
