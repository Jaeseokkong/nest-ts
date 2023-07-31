export interface IUserDB {
    USER_ID: number;
    NAME: string;
    EMAIL: string;
    PWD: string;
    ADR: string;
  }
  
  export const db: IUserDB[] = [
    {
      USER_ID: 1,
      NAME: "YONGSOO",
      EMAIL: "abc@example.com",
      PWD: "inf~!learn",
      ADR: "서울 양천구",
    },
    {
      USER_ID: 2,
      NAME: "SEON TAE",
      EMAIL: "def@example.com",
      PWD: "jib-@joong",
      ADR: "경기도 평택",
    },
    {
      USER_ID: 3,
      NAME: "TAE YEON",
      EMAIL: "hij@example.com",
      PWD: "paris@@123",
      ADR: "전라북도 전주",
    },
    {
      USER_ID: 4,
      NAME: "HYOON",
      EMAIL: "klm@example.com",
      PWD: "re@#act!dev",
      ADR: "인천",
    },
  ];