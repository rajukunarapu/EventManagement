import React from "react";
import { useEffect, useState } from "react";
import { fetchingDummyEventsAPI } from "../Services/FetchingDummyEventsAPI";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import EventWrapper from "../Components/Events/EventWrapper";
import EventBackground from "../Components/Events/Components/EventBackground";

const EventsPage = () => {
  // State variables to hold the fetched data and loading state
  // These will be used to display the events in the hero section and product wrapper
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMethod = async () => {
    const res = await fetchingDummyEventsAPI();
    setData(res.eventData || []);
    setLoading(false);
    if (!res.success) {
      console.error(res.message);
    }
  };

  useEffect(() => {
    fetchMethod();
  }, []);

  return (
    <>
      <NavBar />
      <EventBackground data={data} loading={loading} />
      <EventWrapper />
      <Footer />
    </>
  );
};

export default EventsPage;
