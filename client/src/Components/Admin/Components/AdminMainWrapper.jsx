import React, { useState } from 'react';
import AddEventForm from '../Forms/AddEventForm';
import SubmitButton from './SubmitButton';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Avatar,
  Stack
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AddedEvents from './AddedEvents';
import { useEffect } from 'react';
import { fetchingAddedEventsAPI } from '../../../Services/FetchingAddedEventsAPI';

const AdminMainWrapper = () => {

  //For opening and closing addEvent Form
  const [isAddEventFormOpen, setAddEventFormOpen] = useState(false);

  // Event data from server
  const [eventData, setEventData] = useState([])

  //loading state for fetching events
  const [loading, setLoading] = useState(true);

  // Event data from server
  const fetchData = async () => {
    setLoading(true);
    // Fetching events from the API
    const res = await fetchingAddedEventsAPI();
    if (res.success) {
      setEventData(res.eventData);
      setLoading(false);  
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  const handleSubmit = () => {
    setAddEventFormOpen(true);
  };

  return (
    <>
      <Box  display="flex" flexDirection="column" alignItems="center" >
        <Paper elevation={3} sx={{ p: 4, width: '91%', borderRadius : "15px"}}>
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            <Avatar sx={{ bgcolor: "#1976d2" }}>
              <EventIcon />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight="bold">Admin Event Dashboard</Typography>
              <Typography variant="body2" color="text.secondary">
                Add new events and manage upcoming ones easily.
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="flex-end">
            <SubmitButton handleSubmit={handleSubmit} label="Add Event" color={"success"} />
          </Box>

          {isAddEventFormOpen && (
            <Box mt={3}>
              <AddEventForm setAddEventFormOpen={setAddEventFormOpen} fetchData={fetchData} />
            </Box>
          )}
        </Paper>
      </Box>

      <AddedEvents eventData={eventData} loading={loading} />

    </>
  );
};

export default AdminMainWrapper;