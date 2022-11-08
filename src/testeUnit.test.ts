import { useCaseUser2 } from "./UseCase/user2";
import { repoUserMock } from "./repository/repoUserMock";
import { useCaseUser2Mock } from "./UseCase/user2Mock";
import { userController2 } from "./controller/userConstroller2";
import { Request, Response, response } from "express";
import {app} from "./app";
import request from "supertest";
const rpMock= new repoUserMock()
describe('teste dos use case', () => {
    const usecaseUserTeste = new useCaseUser2(rpMock)
    const usuCsMock = new useCaseUser2Mock(rpMock)
    const cltUse = new userController2(usuCsMock)
    test('teste use case', async () => {      
     expect( usecaseUserTeste.crateUser("moises","1234")).resolves.toBe(true)
     expect( usecaseUserTeste.findUser("moises")).resolves.toBe(true) 
     expect( usecaseUserTeste.loginUser("moises","1234")).resolves.toBe(true) 
     
     const MockRequestCreate = {body:{ nome:"moises",senha:"1234"},}as Request
     
     const MockRequestCre = {params:{},}as Request
     MockRequestCre.params={UserNome:"moises"}
     
    
     

    expect( cltUse.create(MockRequestCreate,response as Response))
    .resolves.toBe(response.status(201))
     
    


   //expect( cltUse.findOne(MockRequestCre,response as Response))
   // .resolves.toBe(response.status(200))
   });


});
