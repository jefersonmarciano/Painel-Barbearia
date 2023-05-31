import { Router } from "express";   
import { UsersControler } from "../controllers/UsersController";

class UsersRoutes{
    private router: Router
    private useresController: UsersControler
    constructor(){
        this.router = Router();
        this.useresController = new UsersControler()
    }
    getRoutes(){
        this.router.post('/', 
        this.useresController.store.bind(this.useresController
        ))
        return this.router
    }
}
export{UsersRoutes}