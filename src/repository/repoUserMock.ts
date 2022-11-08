import { json } from "express";
import { cp } from "fs";
import { fakeDB } from "../database/dbFake";
import { Irepository } from "../interfaces/irepository";

export class repoUserMock implements Irepository{
 dbFake= fakeDB()
    constructor(){
 
    } 
 
    public async createUser(nome:string,senha:string):Promise<boolean> { 
        var create= true
       // condbFake= fakeDB()
        this.dbFake.push({id:1,nome:nome,senha:senha})
        const db= JSON.parse(JSON.stringify(this.dbFake)) 
        
        
     if(create)
     
     return true
     else return false
    }
    
    
    public async findOne(userNome:string):Promise<boolean>{

       var findone= false
       //const dbFake= fakeDB()
      // this.dbFake.push({id:1,nome:"moises",senha:"1234"})
       const db= JSON.parse(JSON.stringify(this.dbFake))
       for (var i=0;i<db.length;i++){
        if(db[i].nome == userNome){
            findone=true
        }
    }
    if(findone)
     return true
     else return false
    }
    
 
  public  async login(nome: string, senha: string):Promise<boolean> {

    var login= false
      // const dbFake= fakeDB()
      // this.dbFake.push({id:1,nome:"moises",senha:"1234"})
       const db= JSON.parse(JSON.stringify(this.dbFake))
       for (var i=0;i<db.length;i++){
        if(db[i].nome == nome && db[i].senha ){
            login=true
        }
    }
     
    if(login) return true
    else return false
 }
 
 }