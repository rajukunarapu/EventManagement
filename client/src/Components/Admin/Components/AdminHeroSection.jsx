import React from 'react'
import { Box, Typography } from '@mui/material'
import image from "../../../assets/images/image5.jpg"

const AdminHeroSection = () => {
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
        alt="admin background"
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
          background: "rgba(0, 0, 0, 0.4)",
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
          Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Effortlessly add, edit, or delete events to keep your platform up to date.
        </Typography>
      </Box>
    </Box>
  )
}

export default AdminHeroSection;