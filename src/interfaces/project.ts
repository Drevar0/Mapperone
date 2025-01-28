import { IStage } from 'src/interfaces/stage';
import { IBasicUserId } from 'src/interfaces/user';

export interface Project {
  id: string;
  name: string;
  author: IBasicUserId;
  contributors: IBasicUserId[];
  stages: IStage[];
}
