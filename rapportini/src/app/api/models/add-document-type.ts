/* tslint:disable */
import { DocumentTypeDto } from './document-type-dto';
export interface AddDocumentType {
  code?: null | string;
  deleted?: null | boolean;
  description?: null | string;
  extCode?: null | string;
  father?: null | DocumentTypeDto;
  groupType?: null | string;
  identity?: null | string;
  legalName?: null | string;
  sectional?: null | string;
}
