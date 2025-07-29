import React, { useEffect, useState } from 'react'
import NavBar from '../Layouts/NavBar'
import HeroSection from '../Layouts/HeroSection'
import ProductWrapper from '../Layouts/ProductWrapper'
import Footer from '../Layouts/Footer'
import { fetchingDummyEventsAPI } from '../Services/FetchingDummyEventsAPI'
const HomePage = () => {

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
        <HeroSection data={data} loading={loading} />
        <ProductWrapper data={data.slice(0,4)} loading={loading} />
        <Footer/>
    </>
  )
}

export default HomePage
