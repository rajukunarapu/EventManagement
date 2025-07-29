import React, { useContext, useState } from "react";
import { Box, Skeleton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Components/HeroSection/Dropdown";
import { categoriesList, LocationList } from "../utils/HeroSectionHelper";
import { AuthContext } from "../Context/AuthContext";
import SearchButton from "../Components/HeroSection/SearchButton";

const HeroSection = ({ data, loading }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [categories, setcategories] = useState("");
  const [location, setLocation] = useState("");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = () => {
    if (categories && location) {
      isAuthenticated ? navigate("/events") : navigate("/login");
    }
  };

  return (
    <Box sx={{ m: 4, position: "relative" }}>
      {/* Skeleton covers the same area so no layout jump */}
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
              transform: "scale(1.02)", // subtle zoom on hover
            },
          }}
        >
          {/* Background Image */}
          <img
            src={data[0]?.image}
            alt="hero"
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          {/* Overlay Content */}
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
            <Typography variant={isMobile ? "h5" : "h3"} fontWeight="bold" mb={2}>
              Your Event, Your Way
            </Typography>

            {/* Search Section */}
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                width: isMobile ? "100%" : "auto",
                backgroundColor: "#fff",
                padding: 2,
                borderRadius: "25px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                color: "#000",
              }}
            >
              <Dropdown
                list={categoriesList}
                value={categories}
                setValue={setcategories}
                label="Select Category"
              />
              <Dropdown
                list={LocationList}
                value={location}
                setValue={setLocation}
                label="Select Location"
              />
              <SearchButton handleClick={handleClick} />
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
