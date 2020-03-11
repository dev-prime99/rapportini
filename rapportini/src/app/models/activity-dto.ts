import { AnagraficaDto } from "./anagrafica-dto";
import { TypeActivityDto } from "./type_activity-dto";

export interface ActivityDto {
    identity: string;
    customer: AnagraficaDto;
    activity: TypeActivityDto;
    date: Date;
    hours: number;
    desc: string;
}