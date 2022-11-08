///
import { Irepository } from "../interfaces/irepository";
import { IuseCaseUser } from "../interfaces/IusecaseUser";

export class useCaseUser2Mock  implements IuseCaseUser{
    repositoryUser:Irepository
    constructor(repoUser:Irepository){
           this.repositoryUser=repoUser;
    }
public crateUser =(nome:string,senha:string)=>{
  return this.repositoryUser.createUser(nome,senha)
}
public findUser =(nome:string):Promise<boolean>=>{
    console.log(this.repositoryUser.findOne(nome))
    return  this.repositoryUser.findOne(nome)
   
}
public loginUser =(nome:string,senha:string)=>{
    return this.repositoryUser.login(nome,senha)
}
}