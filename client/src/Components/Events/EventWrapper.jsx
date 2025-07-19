import { Box, Grid, Typography, Rating } from "@mui/material";
import React, { useState } from "react";
import SharedDropDown from "./Components/SharedDropDown";
import ContinueButton from "./Components/ContinueButton";
import { venuesList } from "../../utils/venuesList"; // Contains 12 venues
import BookingDialog from "./Components/BookingDialog";
import EventCard from "./Components/EventCard";

const EventWrapper = () => {
  // Drop down state variables
  const [guests, setGuests] = useState("");
  const [eventType, setEventType] = useState("");
  const [rating, setRating] = useState("");
  // Filter the venues
  const [filteredVenues, setFilteredVenues] = useState(venuesList);

  // Dropdown contents
  const guestList = ["upto 200", "200-500", "500-1000", "morethan 1000"];
  const eventTypeList = ["Wedding", "Conference", "Concert", "Exhibition"];
  const ratingList = ["1", "2", "3", "4", "5"];

  // cliking the venue for book
  const [isVenueClicked, setIsVenueClicked] = useState(false);

  // Filtering logic

  const handleClick = () => {
    const filtered = venuesList.filter((venue) => {
      return (
        (guests ? venue.guestCapacity === guests : true) &&
        (eventType ? venue.type === eventType : true) &&
        (rating ? String(venue.rating) === rating : true)
      );
    });
    setFilteredVenues(filtered); // 
  };

  return (
    <>
      {/* Filter Section */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
          p: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 2,
          m: 2,
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

        <Grid container spacing={4} justifyContent="center">
          {filteredVenues.map((venue) => (
            <Grid item key={venue.id} xs={12} sm={6} md={4}>
              <EventCard venue={venue} setIsVenueClicked={setIsVenueClicked} />
            </Grid>
          ))}
        </Grid>

        {filteredVenues.length === 0 && (
          <Typography textAlign="center" mt={4} color="gray">
            No venues match your filters. Try changing the filters.
          </Typography>
        )}
      </Box>

       {isVenueClicked && <BookingDialog open={isVenueClicked} setIsVenueClicked={setIsVenueClicked} />}
    </>
  );
};

export default EventWrapper;
