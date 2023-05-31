import { NextFunction, Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";


class UsersControler{
    private usersServices: UsersServices
    constructor(){
        this.usersServices = new UsersServices
    }

    index(){
        //buscar todos
    }
    show(){
        //buscar somente 1
    }
    async store(request: Request, response: Response, next: NextFunction){
        const {name, email, password} = request.body

        try{
            const result = await this.usersServices.create({name, email, password})

            return response.status(201).json(result)

        }catch(error){
            next(error)
        }
    }

    auth(){
        // autenticação do usuario
    }
}

export {UsersControler}