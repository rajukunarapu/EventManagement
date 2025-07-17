import React from 'react'
import { AuthContext } from './AuthContext'
import { isAuthenticatedAPI } from '../Services/isAuthenticatedAPI'
import { useState } from 'react'
import { useEffect } from 'react'

const AuthProviderWrapper = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const authCheck = async()=>{
        const res = await isAuthenticatedAPI()
        setIsAuthenticated(res.success)
    }

    useEffect(()=>{
        authCheck()
    },[])


  return (
    <>
        <AuthContext.Provider value={{isAuthenticated, authCheck}} >
            {children}
        </AuthContext.Provider>

    </>
  )
}

export default AuthProviderWrapper
