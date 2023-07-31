import { IsString, IsNumber } from "class-validator";
import { IUserDB } from "../db/user.repository";
export class UserInfoDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

export class UserQueryIdDto {
  ID: number | string;

  //값을 받을 때
  public static Req(p: UserQueryIdDto) {
    return { ID: typeof p.ID === "number" ? p.ID : Number(p.ID) };
  }

  //값을 전달할 때
  public static Res(p: IUserDB) {
    return {
      ID: p.USER_ID,
      NAME: p.NAME,
      EMAIL: p.EMAIL,
    };
  }
}