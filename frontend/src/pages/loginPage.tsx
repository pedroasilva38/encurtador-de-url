import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeClosed } from 'lucide-react'
import lumeLogo from '../../public/lume-logo.png'

const loginSchema = z.object({
    email: z.email("Endereço de email inválido"),
    password: z.string().min(8, "A senha deve ter, no mínimo, oito caracteres")
})
type LoginType = z.infer<typeof loginSchema>

function LoginPage() {
    const { register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(loginSchema)})
    const [showPassword, setShowPassword] = useState(false)
    
    function onSubmit(data: LoginType) {
        console.log(data)
    }

    const togglePassword = () => setShowPassword(!showPassword)

    useEffect(() => {
            if(Object.keys(errors)) {
                console.log(errors)
            }
        }, [errors])

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-lume-dark">
            <div className='flex flex-col gap-4 w-1/3 bg-lume-darker p-15 border-2 border-gray-700 rounded-lg'>
                <div className=' mb-1 flex justify-center'>
                    <img className='w-30' src={lumeLogo} alt=""/>
                </div>
                <h1 className='text-lume-light text-4xl mb-4 text-center'>Bem vindo(a) de volta</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-md w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary'>Email *
                        <input
                        type="text"
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("email", {required: true})}
                        />
                    </label>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-lg w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary relative'>Senha *
                        <input
                        type={ showPassword ? "text" : "password" }
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("password", {required: true})}
                        />
                        <button type='button' onClick={togglePassword} className='absolute right-3 top-5 cursor-pointer'>{showPassword ? <Eye/> : <EyeClosed/>}</button>
                    </label>
                    <button type='submit' className='border-none bg-lume-primary rounded-md w-full py-4 px-2 text-lume-darker font-bold cursor-pointer hover:bg-lume-bright'>Entrar</button>
                </form>
                <div className='flex justify-between text-lume-light'>
                    <Link to={"/signin"}>Ainda não tem uma conta?</Link>
                    <Link to={""}>Esqueceu a senha?</Link>
                </div>
            </div>
        </div> 
    )
}

export default LoginPage