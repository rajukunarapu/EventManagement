import React from "react";
import { Box, Typography, Rating, Skeleton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PopularVenues = ({ data, loading }) => {
  const navigate = useNavigate();

  // Dummy skeleton array for placeholder cards
  const skeletonArray = [1, 2, 3, 4];

  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      {loading
        ? // Show skeleton cards if loading is true
          skeletonArray.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "300px",
                height: "350px",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                transition: "0.3s",
              }}
            >
              {/* Skeleton for Image */}
              <Skeleton
                variant="rectangular"
                height={200}
                width="100%"
                animation="wave"
                sx={{ borderRadius: "3px 3px 0 0" }}
              />

              {/* Skeleton for text & rating */}
              <Box sx={{ p: 2 }}>
                <Skeleton
                  variant="text"
                  width="70%"
                  height={28}
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="50%"
                  height={22}
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  height={20}
                  sx={{ mb: 1 }}
                />

                {/* Small rectangle for Rating placeholder */}
                <Skeleton
                  variant="rectangular"
                  width={80}
                  height={18}
                  sx={{ mt: 1 }}
                />
              </Box>
            </Box>
          ))
        : // Show real data after loading
          data.map((item, ind) => (
            <Box
              key={ind}
              onClick={() => navigate("/events")}
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
              <Box sx={{ height: 200, overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", transition: "0.3s" }}
                />
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.location}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Capacity: {item.guestCapacity}
                </Typography>
                <Rating
                  value={item.rating}
                  readOnly
                  size="small"
                  sx={{ mt: 1 }}
                />
              </Box>
            </Box>
          ))}
    </Box>
  );
};

export default PopularVenues;
