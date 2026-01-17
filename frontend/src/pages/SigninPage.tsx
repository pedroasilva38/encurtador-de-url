import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import lumeLogo from '../../public/lume-logo.png'
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"

const signinSchema = z.object({
    name: z.string(),
    surname: z.string(),
    email: z.email(),
    password: z.string().min(8),
    passwordCheck: z.string(),
}).refine((data) => data.password === data.passwordCheck, {
    error: "As senhas devem ser iguais",
    path: ["passwordCheck"]
})

type SigninType = z.infer<typeof signinSchema>

function SigninPage() {
    const { register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(signinSchema)})

    function onSubmit(data: SigninType) {
        console.log(data)
    }
    
    useEffect(() => {
        if(Object.keys(errors)) {
            console.log(errors)
        }
    }, [errors])

    return (
        <div>
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-lume-dark">
            <div className='w-1/10 mb-4'>
                <img src={lumeLogo} alt=""/>
            </div>
            <div className='flex flex-col gap-2 w-1/4'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <div className='flex flex-col border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Nome *</label>
                    <input
                    type="text"
                    className='focus:outline-none focus:ring-0'
                    {...register("name", {required: true})}
                    />
                </div>
                <div className='flex flex-col border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Sobrenome *</label>
                    <input
                    type="text"
                    className='focus:outline-none focus:ring-0'
                    {...register("surname", {required: true})}
                    />
                </div>
                <div className='flex flex-col border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Email *</label>
                    <input
                    type="text"
                    className='focus:outline-none focus:ring-0'
                    {...register("email", {required: true})}
                    />
                </div>
                <div className='flex flex-col border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Senha *</label>
                    <input
                    type="password"
                    className='focus:outline-none focus:ring-0 text-md'
                    {...register("password", {required: true})}
                    />
                </div>
                <div className='flex flex-col border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume-dark'>
                    <label className='text-xs'>Confirmar Senha *</label>
                    <input
                    type="password"
                    className='focus:outline-none focus:ring-0 text-md'
                    {...register("passwordCheck", {required: true})}
                    />
                </div>
                <button type='submit' className='border bg-lume-bright border-lume-bright rounded-md w-full py-4 px-2 text-lume-dark font-medium cursor-pointer'>Cadastrar-se</button>
                </form>
                <div className='flex justify-between text-lume-light'>
                <Link to={"/login"}>Já tem uma conta?</Link>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default SigninPage