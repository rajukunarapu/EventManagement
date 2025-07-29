import React from "react";
import EventCard1 from "./EventCard1";
import { Grid, Typography, Box } from "@mui/material";

const AddedEvents = ({ eventData, loading }) => {
  return (
    <Box px={4} py={2}>
      <Typography variant="h4" fontWeight="bold" mt={5} mb={3} textAlign="center">
          Event Venues For Admin
        </Typography>
      { loading ? (
        <Typography textAlign="center">Loading Events...</Typography>
      ) : eventData.length > 0 ? (
        <Grid container spacing={3} justifyContent="center"> 
          {eventData.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard1 event={event} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No events added yet.
        </Typography>
      )}
    </Box>
  );
};

export default AddedEvents;
