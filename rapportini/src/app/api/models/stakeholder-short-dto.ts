/* tslint:disable */
import { AddressDto } from './address-dto';
import { StakeholderDto } from './stakeholder-dto';
import { StakeholderTypeDto } from './stakeholder-type-dto';
import { TagDto } from './tag-dto';
export interface StakeholderShortDto {
  address?: null | AddressDto;
  alias?: null | string;
  code?: null | string;
  disableDate?: null | string;
  email?: null | string;
  firstName?: null | string;
  fiscalCode?: null | string;
  gender?: null | string;
  identity?: null | string;
  legalEmail?: null | string;
  mobilePhone?: null | string;
  name?: null | string;
  phone?: null | string;
  secondName?: null | string;
  suspentionDate?: null | string;
  suspentionNote?: null | string;
  tags?: null | Array<TagDto>;
  title?: null | string;
  topCompany?: null | StakeholderDto;
  type?: null | StakeholderTypeDto;
  vatNumber?: null | string;
}
