import React from "react";
import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";

const EventBackground = ({ data, loading }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box sx={{ m: 4 }}>
        {/* Skeleton stays in the same box so layout doesn’t jump */}
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={isMobile ? 300 : 520}
            sx={{ borderRadius: "20px" }}
          />
        ) : (
          <Box
            sx={{
              height: isMobile ? "300px" : "520px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              opacity: loading ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
              "& img": {
                transition: "transform 0.6s ease",
              },
              "&:hover img": {
                transform: "scale(1.03)",
              },
            }}
          >
            <img
              src={data[7]?.image}
              alt="event"
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />

            {/* Overlay Content */}
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
              <Typography variant={isMobile ? "h5" : "h3"} fontWeight="bold">
                Discover Events
              </Typography>
              <Typography variant="subtitle1" mt={1}>
                Explore stunning venues and plan your next unforgettable
                experience with ease.
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default EventBackground;
