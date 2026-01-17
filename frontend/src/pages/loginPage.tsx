import { useForm } from 'react-hook-form'
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { z } from 'zod'
import lumeLogo from '../../public/lume-logo.png'
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})
type LoginType = z.infer<typeof loginSchema>

function LoginPage() {
    const { register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(loginSchema)})
    
    function onSubmit(data: LoginType) {
        console.log(data)
    }

    useEffect(() => {
            if(Object.keys(errors)) {
                console.log(errors)
            }
        }, [errors])

    return (
       <div className="w-screen h-screen flex flex-col justify-center items-center bg-lume-dark">
            <div className='w-1/10 mb-4'>
                <img src={lumeLogo} alt=""/>
            </div>
            <div className='flex flex-col gap-2 w-1/4'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <div className='flex flex-col border-none bg-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Email *</label>
                    <input
                    type="text"
                    className='focus:outline-none focus:ring-0'
                    {...register("email", {required: true})}
                    />
                </div>
                <div className='flex flex-col border-none bg-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Senha *</label>
                    <input
                    type="password"
                    className='focus:outline-none focus:ring-0 text-md'
                    {...register("password", {required: true})}
                    />
                </div>
                <button type='submit' className='border-none bg-lume-bright rounded-md w-full py-4 px-2 text-lume-dark font-medium cursor-pointer hover:bg-lume-primary'>Entrar</button>
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