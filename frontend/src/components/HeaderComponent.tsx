import lumeLogo from '@/assets/lume-logo.png'
import { CircleUser } from 'lucide-react'

function Header() {
    const userName = 'Pedro'
    return (
        <div className="bg-lume-darker px-8 py-4 border-b-2 border-gray-700 flex w-screen">
            <div className='flex w-2/3 items-center gap-10'>
                <img className="w-30" src={lumeLogo} alt="" />
                <h1 className='text-5xl text-lume-light'>Encurtador de Links</h1>
            </div>
            <div className='flex w-full items-center justify-end gap-3'>
                <h1 className='text-4xl text-lume-light'>Olá, {userName}</h1>
                <button>
                    <CircleUser className='size-15 text-lume-light'/>
                </button>
            </div>
        </div>
    )
}

export default Header