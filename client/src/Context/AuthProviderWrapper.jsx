import React from 'react'
import { AuthContext } from './AuthContext'
import { isAuthenticatedAPI } from '../Services/isAuthenticatedAPI'
import { useState } from 'react'
import { useEffect } from 'react'

const AuthProviderWrapper = ({children}) => {

    //For AUthentication based routes
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    //For user document form successfull signUp
    const [userData, setUserData] = useState([])

    //Loading when refreshing and getting response from API
    const [loading, setLoading] = useState(true)

    const authCheck = async()=>{
        const res = await isAuthenticatedAPI()
        setIsAuthenticated(res.success)
        setLoading(false)
    }

    useEffect(()=>{
        authCheck()
    },[])


  return (
    <>
        <AuthContext.Provider value={{isAuthenticated, loading, authCheck, userData, setUserData}} >
            {children}
        </AuthContext.Provider>

    </>
  )
}

export default AuthProviderWrapper
