import React from 'react'
import NavBar from '../Layouts/NavBar'
import HeroSection from '../Layouts/HeroSection'
import Footer from '../Layouts/Footer'
import AdminWrapper from '../Components/Admin/Components/AdminWrapper'

const AdminPage = () => {
  return (
    <>
        <NavBar/>
        <HeroSection/>
        <AdminWrapper/>
        <Footer/>
    </>
  )
}

export default AdminPage
