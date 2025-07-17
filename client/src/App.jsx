import React from 'react'
import AuthProviderWrapper from './Context/AuthProviderWrapper'
import AppRoutes from './Routes/AppRoutes'

const App = () => {
  return (
    <>
      <AuthProviderWrapper>
        <AppRoutes/>
      </AuthProviderWrapper>
    </>
  )
}

export default App
