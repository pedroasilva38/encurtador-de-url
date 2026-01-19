import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import SigninPage from './pages/login/SigninPage'
import StatsPage from './pages/tabs/StatsPage'
import LinksPage from './pages/tabs/LinksPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signin' element={<SigninPage/>}></Route>
        <Route path='/stats' element={<StatsPage/>}></Route>
        <Route path='/links' element={<LinksPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router