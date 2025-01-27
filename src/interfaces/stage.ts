import { INode } from "./node";

export interface IStage {
    id: string;
    name: string;
    initialNode: INode;
}