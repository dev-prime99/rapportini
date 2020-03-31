/* tslint:disable */
import { AddressDto } from './address-dto';
import { AgreementDto } from './agreement-dto';
import { AttachmentDto } from './attachment-dto';
import { BankDto } from './bank-dto';
import { ContactDto } from './contact-dto';
import { DocumentDto } from './document-dto';
import { NoteDto } from './note-dto';
import { PaymentTypeDto } from './payment-type-dto';
import { SkillDto } from './skill-dto';
import { StakeholderDto } from './stakeholder-dto';
import { StakeholderTypeDto } from './stakeholder-type-dto';
import { TagDto } from './tag-dto';
import { TaxTypeDto } from './tax-type-dto';
export interface AddStakeholder {
  additionalAddresses?: null | Array<AddressDto>;
  address?: null | AddressDto;
  agreements?: null | Array<AgreementDto>;
  alias?: null | string;
  alternativeCode?: null | string;
  attachments?: null | Array<AttachmentDto>;
  banks?: null | Array<BankDto>;
  bornAddress?: null | AddressDto;
  code?: null | string;
  contacts?: null | Array<ContactDto>;
  creationDate?: null | string;
  disableDate?: null | string;
  document?: null | DocumentDto;
  email?: null | string;
  externalPath?: null | string;
  firstName?: null | string;
  fiscalCode?: null | string;
  gender?: null | string;
  identity?: null | string;
  inheritBilling?: boolean;
  interchangeCode?: null | string;
  internalPath?: null | string;
  legalEmail?: null | string;
  mobilePhone?: null | string;
  name?: null | string;
  notes?: null | Array<NoteDto>;
  payment?: null | PaymentTypeDto;
  phone?: null | string;
  reaNumber?: null | string;
  registerCCIAA?: null | string;
  secondName?: null | string;
  skills?: null | Array<SkillDto>;
  source?: null | string;
  suspentionDate?: null | string;
  suspentionNote?: null | string;
  tags?: null | Array<TagDto>;
  tax?: null | TaxTypeDto;
  title?: null | string;
  topCompany?: null | StakeholderDto;
  type?: null | StakeholderTypeDto;
  vatNumber?: null | string;
}
