/* tslint:disable */
import { AgreementTypeDto } from './agreement-type-dto';
export interface AgreementDto {
  confirmData?: null | string;
  confirmDate?: null | string;
  confirmType?: null | string;
  identity?: null | string;
  type?: null | AgreementTypeDto;
}
