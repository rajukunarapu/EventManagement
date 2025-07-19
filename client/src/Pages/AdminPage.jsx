import React from 'react'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'
import AdminMainWrapper from '../Components/Admin/Components/AdminMainWrapper'
import AdminHeroSection from '../Components/Admin/Components/AdminHeroSection'

const AdminPage = () => {
  return (
    <>
        <NavBar/>
        <AdminHeroSection/>
        <AdminMainWrapper/>
        <Footer/>
    </>
  )
}

export default AdminPage
