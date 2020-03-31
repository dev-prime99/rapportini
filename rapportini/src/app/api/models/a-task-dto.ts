/* tslint:disable */
import { ATaskStakeholderDto } from './a-task-stakeholder-dto';
import { ATaskTypeDto } from './a-task-type-dto';
export interface ATaskDto {
  allDay?: boolean;
  close?: null | string;
  closeDescription?: null | string;
  description?: null | string;
  endDate?: null | string;
  father?: null | ATaskDto;
  identity?: null | string;
  stakeholders?: null | Array<ATaskStakeholderDto>;
  startDate?: string;
  type?: null | ATaskTypeDto;
}
