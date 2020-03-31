/* tslint:disable */
import { ArticleDto } from './article-dto';
import { DiscountDto } from './discount-dto';
import { MeasureUnitDto } from './measure-unit-dto';
import { TaxTypeDto } from './tax-type-dto';
export interface BizDocumentDetailDto {
  amount?: number;
  closeDate?: null | string;
  description?: null | string;
  discounts?: null | Array<DiscountDto>;
  expiryDate?: null | string;
  group?: null | string;
  identity?: null | string;
  ignoreDiscounts?: boolean;
  increasedPrice?: number;
  index?: number;
  isClose?: boolean;
  item?: null | ArticleDto;
  levy?: number;
  measureUnit?: null | MeasureUnitDto;
  notes?: null | string;
  previousBizDocumentRow?: null | BizDocumentDetailDto;
  price?: null | number;
  purchasePrice?: null | number;
  quantity?: number;
  rateable?: number;
  rowType?: number;
  sellPrice?: number;
  shortDescription?: null | string;
  taxType?: null | TaxTypeDto;
  unitPrice?: number;
}
