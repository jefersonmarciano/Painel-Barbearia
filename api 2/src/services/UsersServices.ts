import { ICreate } from "../interfaces/UsersInterface"
import { UsersRepository } from "../repositories/UsersRepository"
import { hash } from 'bcrypt';




class UsersServices{
    private userRepository: UsersRepository
    constructor(){
        this.userRepository = new UsersRepository()
    }

    async create({name, email, password}:ICreate){

        const findUser =  await this.userRepository.findUserByEmail(email);
        
        if(findUser){
            throw new Error('User exist')
        }

        const hashPassword = await hash(password, 10);

        const create = await this.userRepository.create({ 
            name, 
            email, 
            password: hashPassword, 
        })

        return create
    }
    // video esta no 50 minutos
}
export {UsersServices}