/* tslint:disable */
import { ArticleDto } from './article-dto';
import { ContractInstallationTypeDto } from './contract-installation-type-dto';
import { ContractStakeholderDto } from './contract-stakeholder-dto';
import { ContractTypeDto } from './contract-type-dto';
import { InstallationDto } from './installation-dto';
import { PaymentTypeDto } from './payment-type-dto';
import { SkillDto } from './skill-dto';
export interface ContractDto {
  code?: null | string;
  contractNotes?: null | string;
  creationDate?: string;
  daysDisable?: null | number;
  daysFrequency?: null | number;
  daysNotice?: null | number;
  daysSuspension?: null | number;
  description?: null | string;
  durationMonths?: number;
  endDate?: null | string;
  identity?: null | string;
  installationTypes?: null | Array<ContractInstallationTypeDto>;
  installations?: null | Array<InstallationDto>;
  isActive?: boolean;
  isMonthly?: boolean;
  item?: null | ArticleDto;
  maxDaysInAdvance?: null | number;
  maxDaysLate?: null | number;
  nextExpirationDate?: null | string;
  onCall?: boolean;
  payment?: null | PaymentTypeDto;
  previousExpirationDate?: null | string;
  priceAmount?: number;
  scheduledHours?: null | number;
  skills?: null | Array<SkillDto>;
  slaHours?: null | number;
  stakeholders?: null | Array<ContractStakeholderDto>;
  startDate?: string;
  techniciansNumber?: null | number;
  type?: null | ContractTypeDto;
  workingHours?: boolean;
}
