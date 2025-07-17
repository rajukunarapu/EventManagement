import { Box, Typography } from "@mui/material";
import React from "react";
import { PopularVenuesList } from "../../utils/popularVenue";

const PopularVenues = () => {
  const venues = PopularVenuesList;

  return (
    <>
      <Box
        sx={{
          height: "400px",
          mt: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {venues.map((item) => {
          return (
            <Box key={item.id} sx={{ width: "300px", height: "400px" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "80%",
                  overflow: "hidden",
                  borderRadius: "10px",
                  cursor : "pointer",
                  "&:hover img": {
                    transform: "scale(1.05)",
                    transition: "0.3s ease-in-out",
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography variant="body2" color="balck" mt={1}>
                {item.name}
              </Typography>
              <Typography variant="body2" color="balck" fontWeight={"bolder"}>
                {item.location}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default PopularVenues;
