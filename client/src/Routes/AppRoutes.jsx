import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// import { useContext } from 'react'
// import { AuthContext } from '../Context/AuthContext'

const AppRoutes = () => {

    // const { isAuthenticated } = useContext(AuthContext)

    const Home = lazy(() => import('../Pages/HomePage'))
    const Signup = lazy(() => import('../Pages/SignupPage'))
    const Login = lazy(() => import('../Pages/LoginPage'))
    const Events = lazy(() => import('../Pages/EventsPage'))
    const Admin = lazy(() => import('../Pages/AdminPage'))

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={"Loading .."} >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/events' element={<Events />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
