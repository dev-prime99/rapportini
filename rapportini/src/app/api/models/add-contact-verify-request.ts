/* tslint:disable */
import { StakeholderShortDto } from './stakeholder-short-dto';
export interface AddContactVerifyRequest {
  date?: string;
  dateSigned?: null | string;
  identity?: null | string;
  key?: null | string;
  kind?: null | string;
  stakeholder?: null | StakeholderShortDto;
  textBody?: null | string;
  value?: null | string;
}
