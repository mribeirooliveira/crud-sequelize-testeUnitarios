import { useCaseUser2 } from "../UseCase/user2";
import { repoUserMock } from "../repository/repoUserMock";
import { useCaseUser2Mock } from "../UseCase/user2Mock";
import { userController2 } from "../controller/userConstroller2";
import { Request, Response, response } from "express";

const rpMock= new repoUserMock()
describe('teste dos use case', () => {
    const usecaseUserTeste = new useCaseUser2(rpMock)
    const usuCsMock = new useCaseUser2Mock(rpMock)
    const cltUse = new userController2(usuCsMock)
    it('*teste UseCase* deve retornar true a cria usuario', async () => {      
     expect( usecaseUserTeste.crateUser("moises","1234")).resolves.toBe(true)
    })
    it('*teste UseCase* deve retornar true ao achar o usuario', async () => { 
     expect( usecaseUserTeste.findUser("moises")).resolves.toBe(true) 
    })
    it('*teste UseCase* deve retornar true ao logar o usuario', async () => { 
     expect( usecaseUserTeste.loginUser("moises","1234")).resolves.toBe(true) 
    })
    
     const MockRequestCreate = {body:{ nome:"maria",senha:"1234"},}as Request
     const MockRequestFindOne = {body:{ nome:"maria"},}as Request
     const MockRequestLogin = {body:{ nome:"maria",senha:"1234"},}as Request

     it('*teste Controller *deve retornar 201 ao criar o usuario', async () => {
    expect( cltUse.create(MockRequestCreate,response as Response))
    .resolves.toBe(response.status(201))
     })
     it('*teste Controller *deve retornar 200 ao achar o usuario', async () => {
    expect( cltUse.create(MockRequestFindOne,response as Response))
    .resolves.toBe(response.status(200))
     })

     it('*teste Controller *deve retornar 200 ao logar o usuario', async () => {
        expect( cltUse.create(MockRequestLogin,response as Response))
        .resolves.toBe(response.status(200))
         })
   });


