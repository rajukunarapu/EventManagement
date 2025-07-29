import React from 'react'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'
import AdminMainWrapper from '../Components/Admin/Components/AdminMainWrapper'
import AdminHeroSection from '../Components/Admin/Components/AdminHeroSection'
import { fetchingDummyEventsAPI } from '../Services/FetchingDummyEventsAPI'
import { useState } from 'react'
import { useEffect } from 'react'

const AdminPage = () => { 

  // State variables to hold the fetched data and loading state
      // These will be used to display the events in the hero section and product wrapper
      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true);
    
      const fetchMethod = async()=>{
         const res = await fetchingDummyEventsAPI();
         setData(res.eventData || []);
         setLoading(false);   
         if(!res.success){
           console.error(res.message);
         }  
      }
    
      useEffect(()=>{
       fetchMethod();
      },[])
  

  return (
    <>
        <NavBar/>
        <AdminHeroSection data={data} loading={loading} />
        <AdminMainWrapper/>
        <Footer/>
    </>
  )
}

export default AdminPage
