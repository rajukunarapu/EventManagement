import React from 'react'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'
import EventWrapper from '../Components/Events/EventWrapper'
import EventBackground from '../Components/Events/Components/EventBackground'

const EventsPage = () => {
  return (
    <>
        <NavBar/>
        <EventBackground/>
        <EventWrapper/>
        <Footer/>
    </>
  )
}

export default EventsPage
