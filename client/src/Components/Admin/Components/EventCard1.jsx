import React, { useState } from "react";
import { Box, Typography, Rating, Skeleton } from "@mui/material";

const EventCard1 = ({ event }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Box
      sx={{
        width: "300px",
        height: "350px",
        cursor: "pointer",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        transition: "0.3s",
        "&:hover img": { transform: "scale(1.05)" },
      }}
    >
      {/*  Image Skeleton */}
      {imageLoading && (
        <Skeleton
          variant="rectangular"
          height={200}
          width="100%"
          animation="wave"
        />
      )}

      <Box sx={{ height: 200, overflow: "hidden" }}>
        <img
          src={event.image}
          alt={event.name}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            transition: "0.3s",
            display: imageLoading ? "none" : "block", // hides image until loaded
          }}
          onLoad={() => setTimeout(() => setImageLoading(false), 1000)} // adds slight delay
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ p: 2 }}>
        {imageLoading ? (
          <>
            <Skeleton variant="text" width="70%" height={30} />
            <Skeleton variant="text" width="50%" height={20} sx={{ mt: 1 }} />
            <Skeleton variant="text" width="60%" height={20} sx={{ mt: 1 }} />
            <Skeleton
              variant="rectangular"
              width={80}
              height={20}
              sx={{ mt: 1, borderRadius: 1 }}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Box>
    </Box>
  );
};

export default EventCard1;
