import { Box, Rating, Typography, Skeleton } from "@mui/material";
import React, { useState } from "react";

const EventCard = ({ venue, setIsVenueClicked }) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <Box
      onClick={() => setIsVenueClicked(true)}
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
      {/* Image Skeleton */}
      {imgLoading && <Skeleton variant="rectangular" height={200} width="100%" animation="wave" />}

      <Box sx={{ height: 200, overflow: "hidden", display: imgLoading ? "none" : "block" }}>
        <img
          src={venue.image}
          alt={venue.name}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", transition: "0.3s" }}
          onLoad={() => setImgLoading(false)}
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ p: 2 }}>
        {/* Title Skeleton */}
        {imgLoading ? (
          <>
            <Skeleton variant="text" width="70%" height={30} />
            <Skeleton variant="text" width="50%" height={20} sx={{ mt: 1 }} />
            <Skeleton variant="text" width="60%" height={20} sx={{ mt: 1 }} />
            <Skeleton variant="rectangular" width={80} height={20} sx={{ mt: 1, borderRadius: 1 }} />
          </>
        ) : (
          <>
            <Typography variant="h6" fontWeight="bold">
              {venue.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {venue.location}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Capacity: {venue.guestCapacity}
            </Typography>
            <Rating value={venue.rating} readOnly size="small" sx={{ mt: 1 }} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default EventCard;
