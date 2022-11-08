export interface IuseCaseUser{
    crateUser(nome:string,senha:string):Promise<boolean>
    findUser(userNome:string):Promise<boolean>
    loginUser(nome:string,senha:string):Promise<boolean>
}