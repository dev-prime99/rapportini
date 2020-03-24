import { AnagraficaDto } from "./anagrafica-dto";
import { TypeActivityDto } from "./type_activity-dto";
import { ProjectDto } from "./project-dto";
import { UserService } from "../service/user.service";

export interface ActivityDto {
    identity: string;
    customer: AnagraficaDto;
    activity: TypeActivityDto;
    project: ProjectDto;
    date: Date;
    hours: number;
    user: string;
    desc: string;
}