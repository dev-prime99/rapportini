/* tslint:disable */
import { AddressTypeDto } from './address-type-dto';
import { ZoneDto } from './zone-dto';
export interface AddressDto {
  city?: null | string;
  country?: null | string;
  description?: null | string;
  email?: null | string;
  end?: null | string;
  fax?: null | string;
  identity?: null | string;
  latitude?: null | string;
  longitude?: null | string;
  number?: null | string;
  phone?: null | string;
  place?: null | string;
  province?: null | string;
  start?: null | string;
  street?: null | string;
  type?: null | AddressTypeDto;
  zipCode?: null | string;
  zone?: null | ZoneDto;
}
