import React from 'react'
import { Box, Typography, Rating } from '@mui/material'

const EventCard1 = ({event}) => {
  return (
    <>
        <Box
                sx={{
                  width: "300px",
                  height: "350px",
                  cursor: "pointer",
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
                    src={event.image}
                    alt={event.name}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover", transition: "0.3s" }}
                  />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {event.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Capacity: {event.guestCapacity}
                  </Typography>
                  <Rating value={event.rating} readOnly size="small" sx={{ mt: 1 }} />
                </Box>
              </Box>

    </>
  )
}

export default EventCard1
