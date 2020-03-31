/* tslint:disable */
import { InstallationDto } from './installation-dto';
export interface InstallationDtoBaseResult {
  error?: null | string;
  ok?: boolean;
  result?: null | InstallationDto;
}
