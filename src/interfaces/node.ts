import { IBasicUserId } from "./user";

export interface INode {
    id: string;
    name: string;
    createdOn: Date;
    modifiedOn: Date;
    modifiedBy: IBasicUserId;
    rules?: string;
    note?: string;
    type: INodeType;
    status: INodeStatus;
    childrens?: INode[];
}


export type INodeType = 
"p"  // property
| "c" // class
| "a" // array
| "aa" // attribute array
| "ap" // attribute property
;

export type INodeStatus =
"p" // published
| "d" // draft
| "r" // review
| "a" // archived
;