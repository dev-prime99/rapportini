/* tslint:disable */
import { AddressDto } from './address-dto';
import { InstallationItemDto } from './installation-item-dto';
import { InstallationTypeDto } from './installation-type-dto';
import { StakeholderShortDto } from './stakeholder-short-dto';
export interface UpdateInstallation {
  address?: null | AddressDto;
  code?: null | string;
  description?: null | string;
  identity?: null | string;
  installationDate?: string;
  items?: null | Array<InstallationItemDto>;
  notes?: null | string;
  stakeholder?: null | StakeholderShortDto;
  type?: null | InstallationTypeDto;
}
