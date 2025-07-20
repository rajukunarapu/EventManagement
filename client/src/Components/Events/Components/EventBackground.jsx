import React from 'react'
import { Box, Typography } from '@mui/material'
import image from "../../../assets/images/image10.jpg"

const EventBackground = () => {
  return (
    <Box
      sx={{
        height: "520px",
        m: 4,
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={image}
        alt="event"
        width="100%"
        height="100%"
        style={{ objectFit: "cover", borderRadius: "20px" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.35)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Discover Events
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Explore stunning venues and plan your next unforgettable experience with ease.
        </Typography>
      </Box>
    </Box>
  )
}

export default EventBackground