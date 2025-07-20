import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SharedDropDown from "./Components/SharedDropDown";
import ContinueButton from "./Components/ContinueButton";
import BookingDialog from "./Components/BookingDialog";
import EventCard from "./Components/EventCard";
import { fetchingAddedEventsAPI } from "../../Services/FetchingAddedEventsAPI";

const EventWrapper = () => {
  // State for dropdown filters
  const [guests, setGuests] = useState("");
  const [eventType, setEventType] = useState("");
  const [rating, setRating] = useState("");

  // Events from server
  const [fetchedDocuments, setFetchedDocuments] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  // Book dialog state
  const [isVenueClicked, setIsVenueClicked] = useState(false);

  // Fetch events from server
  useEffect(() => {
    const fetchEvents = async () => {
  
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

  // Update filtered venues when data is fetched
  useEffect(() => {
    setFilteredVenues(fetchedDocuments);
  }, [fetchedDocuments]);

  // Dropdown filter logic
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
          background: "linear-gradient(90deg, #76bf1dff 0%, #239fb0ff 100%)",
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
