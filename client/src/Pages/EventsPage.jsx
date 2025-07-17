import React from 'react'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'
import HeroSection from '../Layouts/HeroSection'
import EventWrapper from '../Components/Events/EventWrapper'

const EventsPage = () => {
  return (
    <>
        <NavBar/>
        <HeroSection title={true} />
        <EventWrapper/>
        <Footer/>
    </>
  )
}

export default EventsPage
