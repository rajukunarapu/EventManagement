import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SharedDropDown from "./Components/SharedDropDown";
import ContinueButton from "./Components/ContinueButton";
import BookingDialog from "./Components/BookingDialog";
import EventCard from "./Components/EventCard";
import { fetchingAddedEventsAPI } from "../../Services/FetchingAddedEventsAPI";

const EventWrapper = () => {

  // state variables for filters
  // These will be used to filter the events based on user selection
  const [guests, setGuests] = useState("");
  const [eventType, setEventType] = useState("");
  const [rating, setRating] = useState("");

  // State for fetched documents and filtered venues  
  const [fetchedDocuments, setFetchedDocuments] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to manage the booking dialog visibility
  // This will be set to true when a venue card is clicked
  const [isVenueClicked, setIsVenueClicked] = useState(false);

  // Fetch events when the component mounts
  // This will call the API to get the list of events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      // Fetching events from the API   
        const res = await fetchingAddedEventsAPI();
        if (res.success) {
          setFetchedDocuments(res.eventData);
          setLoading(false)
        } else {
          console.error("Error fetching events");
        }
    };
    fetchEvents();
  }, []);

  // Update filtered venues when fetched documents change
  // This will ensure that the displayed venues are always up-to-date with the fetched data
  useEffect(() => {
    setFilteredVenues(fetchedDocuments);
  }, [fetchedDocuments]);

  // Function to handle the filter button click
  const handleClick = () => {
    const filtered = fetchedDocuments.filter((venue) => {
      return (
        (guests ? venue.guestCapacity === guests : true) &&
        (eventType ? venue.type === eventType : true) &&
        (rating ? String(venue.rating) === rating : true)
      );
    });
    setFilteredVenues(filtered);
  };

  // Dropdown options
  const guestList = ["upto 200", "200-500", "500-1000", "morethan 1000"];
  const eventTypeList = ["Wedding", "Conference", "Concert", "Exhibition"];
  const ratingList = ["1", "2", "3", "4", "5"];

  return (
    <>
      {/* Filters */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #f1ea27ff, #DD2476  )",
          p: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 2,
          m: 4,
        }}
      >
        <SharedDropDown
          label={"No of Guests"}
          value={guests}
          setValue={setGuests}
          list={guestList}
        />
        <SharedDropDown
          label={"Type of Event"}
          value={eventType}
          setValue={setEventType}
          list={eventTypeList}
        />
        <SharedDropDown
          label={"Min Rating"}
          value={rating}
          setValue={setRating}
          list={ratingList}
        />
        <ContinueButton handleClick={handleClick} />
      </Box>

      {/* Venue Grid */}
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
          Best Event Venues for You
        </Typography>

        {loading ? (
          <Typography textAlign="center">Loading venues...</Typography>
        ) : filteredVenues.length > 0 ? (
          <Grid container spacing={4} justifyContent="center">
            {filteredVenues.map((venue) => (
              <Grid item key={venue._id || venue.id} xs={12} sm={6} md={4}>
                <EventCard
                  venue={venue}
                  setIsVenueClicked={setIsVenueClicked}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography textAlign="center" mt={4} color="gray">
            No venues match your filters. Try changing the filters.
          </Typography>
        )}
      </Box>

      {/* Booking Dialog */}
      {isVenueClicked && (
        <BookingDialog
          open={isVenueClicked}
          setIsVenueClicked={setIsVenueClicked}
        />
      )}
    </>
  );
};

export default EventWrapper;
