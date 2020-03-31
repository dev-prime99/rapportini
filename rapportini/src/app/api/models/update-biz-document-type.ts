/* tslint:disable */
import { BizDocumentTypeDto } from './biz-document-type-dto';
import { BizDocumentTypeStatusDto } from './biz-document-type-status-dto';
export interface UpdateBizDocumentType {
  annualIncrease?: null | boolean;
  code?: null | string;
  deleted?: null | boolean;
  description?: null | string;
  extCode?: null | string;
  father?: null | BizDocumentTypeDto;
  groupType?: null | string;
  identity?: null | string;
  legalName?: null | string;
  sectional?: null | string;
  status?: null | Array<BizDocumentTypeStatusDto>;
  withVat?: null | boolean;
}
