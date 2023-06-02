import style from './Login.module.css'
import logo from '../../assets/vector-3071686_960_720.webp'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../components/Input/Button'
import { Link } from 'react-router-dom'
import{GoKey} from 'react-icons/go'
import{AiOutlineMail} from 'react-icons/ai'

interface IformValues{
    email: string;
    password: string;
}

export function Login(){
    const schema = yup.object().shape({
        email: yup
        .string()
        .email('Digite um email valido!!!')
        .required('Campo de email obrigatorio!!!'),

        password: yup
        .string()
        .required('Campo de Senha Obrigatorio')
    })

    const {register, handleSubmit, formState:{errors} } = useForm<IformValues>({resolver: yupResolver(schema)})
    const submit = handleSubmit((data) => {
        console.log('file: index 27 subimit data', data)
    })
    return(
        <div className={style.background}>
            <div className={`container ${style.container}`}>
                <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src={logo} alt="" width={200} />
                    
                </div>
                <div className={style.card}>
                    <h2>Olá! Seja bem-vindo!</h2>
                    <form onSubmit={submit}>
                        <Input
                        placeholder="Email"
                        type="text" 
                        {...register('email', {required: true})} 
                        error={errors.email && errors.email.message}
                        icon={<AiOutlineMail size={20} />}
                        />
                        <Input 
                        placeholder="Senha" 
                        type="password"
                        {...register('password', {required: true})}
                        error={errors.password && errors.password.message}
                        icon={<GoKey size={20} />}
                        />
                        <Button text='Entrar'/>
                    </form>

                    <div className={style.register}>
                        <span>Ainda Nao tem conta? <Link to={'/register'}>Cadastre-se</Link> {''}</span>
                    </div>
                    
                </div>
                </div>
                

            </div>
        </div>
    )
}