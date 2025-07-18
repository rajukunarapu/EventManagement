import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import Dropdown from "../Components/HeroSection/Dropdown";
import SelectButton from "../Components/HeroSection/SelectButton";
import { categoriesList, LocationList } from "../utils/HeroSectionHelper";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ title }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [categories, setcategories] = useState("");
  const [location, setLocation] = useState("");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = () => {
    if (categories !== "" && location !== "") {
      if (isAuthenticated) {
        return navigate("/events");
      } else {
        return navigate("/login");
      }
    }
  };

  return (
    <Box
      sx={{
        m:4,
        height: isMobile ? "auto" : "340px",
        p: 5,
        background: "linear-gradient(120deg, #ffe4e1, #ffecd2, #fbd3e9)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: "40px",
        gap: 3,
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        color="#333"
        textAlign="center"
        sx={{ fontFamily: "'Segoe UI', sans-serif" }}
      >
        {title ? "Our Wedding Venues" : "Your Wedding, Your Way"}
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
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
        <SelectButton handleClick={handleClick} />
      </Stack>
    </Box>
  );
};

export default HeroSection;
