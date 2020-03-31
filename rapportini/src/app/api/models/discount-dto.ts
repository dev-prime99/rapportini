/* tslint:disable */
import { DiscountType } from './discount-type';
export interface DiscountDto {
  cause?: null | string;
  identity?: null | string;
  increase?: boolean;
  order?: number;
  type?: DiscountType;
  value?: number;
}
