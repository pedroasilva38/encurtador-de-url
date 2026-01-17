import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SigninPage from './pages/SigninPage'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signin' element={<SigninPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router