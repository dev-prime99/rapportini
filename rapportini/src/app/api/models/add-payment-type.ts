/* tslint:disable */
import { BizTransactionTypeDto } from './biz-transaction-type-dto';
export interface AddPaymentType {
  augustDay?: null | number;
  bankCost?: number;
  code?: null | string;
  decemberDay?: null | number;
  delay?: null | number;
  description?: null | string;
  endMonth?: null | boolean;
  identity?: null | string;
  paymentDay?: null | number;
  paymentDuration?: null | number;
  paymentsNumber?: null | number;
  postponeAugust?: null | boolean;
  postponeDecember?: null | boolean;
  type?: null | BizTransactionTypeDto;
}
