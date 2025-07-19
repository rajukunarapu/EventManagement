import React, { useContext, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Components/HeroSection/Dropdown";
import { categoriesList, LocationList } from "../utils/HeroSectionHelper";
import { AuthContext } from "../Context/AuthContext";
import SearchButton from "../Components/HeroSection/SearchButton";
import image from "../assets/images/image7.jpg";

const HeroSection = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // state variables for categories and location
  const [categories, setcategories] = useState("");
  const [location, setLocation] = useState("");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = () => {
    if (categories && location) {
      isAuthenticated ? navigate("/events") : navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        m: 4,
        height: isMobile ? "auto" : "520px",
        borderRadius: "40px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={image}
        alt="hero"
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          borderRadius: "40px",
        }}
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
        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          mb={2}
        >
          Your Wedding, Your Way
        </Typography>

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
  );
};

export default HeroSection;