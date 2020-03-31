/* tslint:disable */
import { StatusTypeDto } from './status-type-dto';
export interface StatusDto {
  date?: string;
  identity?: null | string;
  notes?: null | string;
  type?: null | StatusTypeDto;
}
