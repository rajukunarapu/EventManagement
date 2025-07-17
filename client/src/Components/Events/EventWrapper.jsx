import { Box, Grid, Typography, Rating } from "@mui/material";
import React, { useState } from "react";
import SharedDropDown from "./Components/SharedDropDown";
import ContinueButton from "./Components/ContinueButton";
import { venuesList } from "../../utils/venuesList"; // Contains 12 venues

const EventWrapper = () => {
  const [guests, setGuests] = useState("");
  const [eventType, setEventType] = useState("");
  const [rating, setRating] = useState("");

  const guestList = ["upto 200", "200-500", "500-1000", "morethan 1000"];
  const eventTypeList = ["Wedding", "Conference", "Concert", "Exhibition"];
  const ratingList = ["1", "2", "3", "4", "5"];

  // Filtering logic
  const filteredVenues = venuesList.filter((venue) => {
    const guestCap = venue.guestCapacity;
    const ratingMatch = rating ? venue.rating >= parseInt(rating) : true;
    const guestMatch = guests
      ? (guests === "upto 200" && guestCap <= 200) ||
        (guests === "200-500" && guestCap > 200 && guestCap <= 500) ||
        (guests === "500-1000" && guestCap > 500 && guestCap <= 1000) ||
        (guests === "morethan 1000" && guestCap > 1000)
      : true;
    const eventTypeMatch = eventType ? venue.eventType === eventType : true;

    return ratingMatch && guestMatch && eventTypeMatch;
  });

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
          m:2
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
        <ContinueButton />
      </Box>

      {/* Venue Grid */}
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
          Best Event Venues for You
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {filteredVenues.map((venue) => (
            <Grid item key={venue.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 340,
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box sx={{ height: 200, overflow: "hidden" }}>
                  <img
                    src={venue.image}
                    alt={venue.name}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover", transition: "0.3s" }}
                  />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {venue.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {venue.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Capacity: {venue.guestCapacity}
                  </Typography>
                  <Rating
                    value={venue.rating}
                    readOnly
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {filteredVenues.length === 0 && (
          <Typography textAlign="center" mt={4} color="gray">
            No venues match your filters. Try changing the filters.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default EventWrapper;