import { INode } from 'src/interfaces/node';

export interface IStage {
  id: string;
  name: string;
  initialNode: INode;
}
