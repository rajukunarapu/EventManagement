import React from 'react';
import EventCard1 from './EventCard1';
import { Grid, Typography, Box } from '@mui/material';

const AddedEvents = ({ eventData }) => {
  return (
    <Box px={4} py={2}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Added Events
      </Typography>

      {eventData.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No events added yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {eventData.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard1 event={event} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AddedEvents;
