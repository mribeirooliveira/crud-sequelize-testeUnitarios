///
import { Irepository } from "../interfaces/irepository";
import { IuseCaseUser } from "../interfaces/IusecaseUser";

export class useCaseUser2Mock  implements IuseCaseUser{
    repositoryUserMock:Irepository
    constructor(repoUser:Irepository){
           this.repositoryUserMock=repoUser;
    }
public crateUser =(nome:string,senha:string)=>{
  return this.repositoryUserMock.createUser(nome,senha)
}
public findUser =(nome:string):Promise<boolean>=>{
    return  this.repositoryUserMock.findOne(nome)
   
}
public loginUser =(nome:string,senha:string)=>{
    return this.repositoryUserMock.login(nome,senha)
}
}