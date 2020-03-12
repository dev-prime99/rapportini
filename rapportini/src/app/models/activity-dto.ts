import { AnagraficaDto } from "./anagrafica-dto";
import { TypeActivityDto } from "./type_activity-dto";
import { ProjectDto } from "./project-dto";

export interface ActivityDto {
    identity: string;
    customer: AnagraficaDto;
    activity: TypeActivityDto;
    project: ProjectDto;
    date: Date;
    hours: number;
    desc: string;
}