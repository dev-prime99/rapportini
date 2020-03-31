/* tslint:disable */
import { ATaskDto } from './a-task-dto';
export interface ATaskDtoBaseResult {
  error?: null | string;
  ok?: boolean;
  result?: null | ATaskDto;
}
