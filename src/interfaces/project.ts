import { IStage } from "./stage";
import { IBasicUserId } from "./user";

export interface Project {
    id: string;
    name: string;
    author: IBasicUserId;
    contributors: IBasicUserId[];
    stages: IStage[];

}