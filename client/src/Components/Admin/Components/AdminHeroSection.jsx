import React from "react";
import { Box, Typography, useMediaQuery, Skeleton } from "@mui/material";

const AdminHeroSection = ({ data, loading }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={isMobile ? 300 : 520}
          sx={{ borderRadius: "20px", margin: 4, overflow: "hidden" }}
        />
      ) : (
        <Box
          sx={{
            m: 4,
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
            src={data[4]?.image}
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
              Effortlessly add, edit, or delete events to keep your platform up
              to date.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AdminHeroSection;
