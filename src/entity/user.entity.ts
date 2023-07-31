export class UserEntity {
    USER_ID?: number | string;
    NAME?: string;
    EMAIL?: string;
    PWD?: string;
    ADR?: string;

    constructor(
        USER_ID? : number | string,
        NAME? : string, 
        EMAIL? : string,
        PWD? : string,
        ADR? : string
    ){
        if(USER_ID) this.USER_ID = USER_ID
        if(NAME) this.NAME = NAME
        if(EMAIL) this.EMAIL = EMAIL
        if(PWD) this.PWD = PWD
        if(ADR) this.ADR = ADR
    }

    static Builder = class extends UserEntity {
        constructor() {
            super();
        }

        $USER_ID(USER_ID){
            this.USER_ID = USER_ID;
            return this;
        }
        $NAME(NAME){
            this.NAME = NAME;
            return this;
        }

        $EMAIL(EMAIL){
            this.EMAIL = EMAIL;
            return this;
        }

        $PWD(PWD){
            this.PWD = PWD;
            return this;
        }

        $ADR(ADR){
            this.ADR = ADR;
            return this;
        }


        build(){
            return new UserEntity(
                this.USER_ID,
                this.NAME,
                this.EMAIL, 
                this.PWD, 
                this.ADR
                );
        }
    }
}
  
console.log(
    new UserEntity.Builder()
        .$USER_ID(1)
        .$NAME("jaeseok")
        .$PWD("password!!")
        .$ADR("seoul")
        .build(),
)