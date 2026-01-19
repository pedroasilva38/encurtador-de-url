import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import lumeLogo from '@/assets/lume-logo.png'
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"

const signinSchema = z.object({
    name: z.string().min(2, "O nome deve ser preenchido"),
    surname: z.string().min(2, "O sobrenome deve ser preenchido"),
    email: z.email("Endereço de email inválido"),
    password: z.string().min(8, "A senha deve ter, no mínimo, oito caracteres"),
    passwordCheck: z.string(),
}).refine((data) => data.password === data.passwordCheck, {
    error: "As senhas devem ser iguais",
    path: ["passwordCheck"]
})

type SigninType = z.infer<typeof signinSchema>

function SigninPage() {
    const { register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(signinSchema)})

    function onSubmit(data: SigninType) {
        if (data) {
            console.log(data)
        }
    }
    
    useEffect(() => {
        if(Object.keys(errors)) {
            console.log(errors)
        }
    }, [errors])

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-lume-dark">
            <div className='flex flex-col gap-4 w-1/3 bg-lume-darker p-10 border-2 border-gray-700 rounded-lg'>
                <div className='mb-1 flex justify-center'>
                    <img className='w-30' src={lumeLogo} alt=""/>
                </div>
                <h1 className='text-lume-light text-4xl mb-4 text-center'>Registre-se já</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-md w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary'>Nome *
                        <input
                        type="text"
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("name", {required: true})}
                        />
                    </label>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-md w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary'>Sobrenome *
                        <input
                        type="text"
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("surname", {required: true})}
                        />
                    </label>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-md w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary'>Email *
                        <input
                        type="text"
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("email", {required: true})}
                        />
                    </label>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-lg w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary'>Senha *
                        <input
                        type="password"
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("password", {required: true})}
                        />
                    </label>
                    <label className='flex flex-col bg-lume-dark border-2 border-gray-700 rounded-lg w-full py-2 px-2 text-lume-light font-bold text-xs transition-all focus-within:ring-2 focus-within:ring-lume-primary'>Confirmar Senha *
                        <input
                        type="password"
                        className='focus:outline-none focus:ring-0 text-lg'
                        {...register("passwordCheck", {required: true})}
                        />
                    </label>
                    <button type='submit' className='border-none bg-lume-primary rounded-md w-full py-4 px-2 text-lume-darker font-bold cursor-pointer hover:bg-lume-bright'>Entrar</button>
                </form>
                <div className='flex justify-between text-lume-light'>
                    <Link to={"/login"}>Já tem uma conta?</Link>
                </div>
            </div>
        </div> 
    )
}

export default SigninPage