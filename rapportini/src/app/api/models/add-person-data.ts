/* tslint:disable */
import { AddressDto } from './address-dto';
import { DocumentDto } from './document-dto';
import { NoteDto } from './note-dto';
export interface AddPersonData {
  additionalAddresses?: null | Array<AddressDto>;
  address?: null | AddressDto;
  alias?: null | string;
  alternativeCode?: null | string;
  bornAddress?: null | AddressDto;
  document?: null | DocumentDto;
  email?: null | string;
  firstName?: null | string;
  fiscalCode?: null | string;
  gender?: null | string;
  interchangeCode?: null | string;
  legalEmail?: null | string;
  mobilePhone?: null | string;
  notes?: null | Array<NoteDto>;
  phone?: null | string;
  secondName?: null | string;
  source?: null | string;
  title?: null | string;
}
