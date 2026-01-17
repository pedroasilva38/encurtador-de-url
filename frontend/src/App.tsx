import React, { useState, useEffect } from 'react'
import lume_logo from '../public/lume_logo.png'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(email, password)
  }

  const handleAction= async () => useEffect({

  }, [])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-lume-dark">
      <div className='w-1/10 mb-2'>
        <img src={lume_logo} alt=""/>
      </div>
      <div className='flex flex-col gap-4 w-1/5'>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <input
          type="text"
          placeholder='Email'
          className='border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume-dark'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          />
          <input
          type="password"
          placeholder='Senha'
          className='border bg-lume-light border-lume-light rounded-md w-full py-2 px-2 text-lume'
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          />
          <button type='submit' className='border bg-lume-bright border-lume-bright rounded-md w-full py-2 px-2 text-lume-dark font-medium cursor-pointer'>Entrar</button>
        </form>
        <div className='flex justify-between text-lume-light'>
          <a href="">Ainda não tem uma conta?</a>
          <a href="">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  )
}

export default App