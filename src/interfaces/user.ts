export interface IBasicUserId {
    id: string;
}

export interface IBasicUser extends IBasicUserId {
    name: string;
}

export interface ICurrentUser extends IBasicUser {
    savePath: string; // placeholder
}