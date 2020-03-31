/* tslint:disable */
import { UserDto } from './user-dto';
export interface UserDtoBaseResult {
  error?: null | string;
  ok?: boolean;
  result?: null | UserDto;
}
