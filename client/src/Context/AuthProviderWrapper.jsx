import React from 'react'
import { AuthContext } from './AuthContext'
import { isAuthenticatedAPI } from '../Services/isAuthenticatedAPI'
import { useState } from 'react'
import { useEffect } from 'react'

const AuthProviderWrapper = ({children}) => {

    //For AUthentication based routes
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
        <AuthContext.Provider value={{isAuthenticated, loading, authCheck}} >
            {children}
        </AuthContext.Provider>

    </>
  )
}

export default AuthProviderWrapper
