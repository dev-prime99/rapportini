/* tslint:disable */
import { UserDto } from './user-dto';
export interface InfoDto {
  contract?: boolean;
  logoUrl?: null | string;
  privacy?: boolean;
  user?: null | UserDto;
}
