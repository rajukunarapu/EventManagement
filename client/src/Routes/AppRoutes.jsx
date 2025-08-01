import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "../Components/Common/PageLoading";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProtectedMessage from "../Components/Protected/ProtectedMessage";

const AppRoutes = () => {

    // Form context object
    const { isAuthenticated, loading } = useContext(AuthContext);
    const userData = JSON.parse(localStorage.getItem('userData'))

    // For Loading while getting response from API after refresh 
    if(loading){
        return <PageLoading/>
    }

    console.log({isAuthenticated})

    const Home = lazy(() => import("../Pages/HomePage"));
    const Signup = lazy(() => import("../Pages/SignupPage"));
    const Login = lazy(() => import("../Pages/LoginPage"));
    const Events = lazy(() => import("../Pages/EventsPage"));
    const Admin = lazy(() => import("../Pages/AdminPage"));

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<PageLoading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/admin"
                            element={
                                isAuthenticated ? ( userData &&  userData.role ==="admin" ? <Admin/> : <ProtectedMessage/>) : <Navigate to="/login" replace />
                            }
                        />
                        <Route
                            path="/events"
                            element={
                                isAuthenticated ? <Events /> : <Navigate to="/login" replace />
                            }
                        />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;
