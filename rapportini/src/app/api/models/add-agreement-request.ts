/* tslint:disable */
import { AgreementRequestDetailDto } from './agreement-request-detail-dto';
import { StakeholderShortDto } from './stakeholder-short-dto';
export interface AddAgreementRequest {
  date?: string;
  dateSigned?: null | string;
  details?: null | Array<AgreementRequestDetailDto>;
  identity?: null | string;
  key?: null | string;
  stakeholder?: null | StakeholderShortDto;
}
