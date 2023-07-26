export interface IUserInfo{
    name: string;
    age : number | string;   
}

export class UserInfo {
    public static Request(p: IUserInfo) {
        return {
            name: p?.name ?? "이름 없음",
            age: p?.age ?  (typeof p?.age === "number" ? p?.age : Number(p?.age)) : 0,
        }
    }

    public static Response(){
        return {};
    }
}