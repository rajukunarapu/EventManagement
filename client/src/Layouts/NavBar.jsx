import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Admin", to: "/admin" },
    { id: 3, name: "Venues", to: "/events" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        px: { xs: 2, md: 5 },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "monospace",
            letterSpacing: 1,
          }}
        >
          Eventify
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 3 },
            alignItems: "center",
          }}
        >
          {navLinks.map((item) => (
            <Link key={item.id} to={item.to} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  fontWeight: 600,
                  color: "#333",
                  borderRadius: 2,
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              px: 3,
              py: 1,
              borderRadius: 3,
              boxShadow: "0 4px 10px rgba(91, 134, 229, 0.4)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(45deg, #5b86e5, #36d1dc)",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
