import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoginButton from "../Components/Common/LoginButton";

const NavBar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navLinks = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Admin", to: "/admin" },
    { id: 3, name: "Venues", to: "/events" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        background: "linear-gradient(90deg, #62209fff 0%, #38429fff 100%)",
        px: { xs: 2, md: 5 },
        py: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bolder">
          Event Management
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 4 },
            alignItems: "center",
          }}
        >
          {navLinks.map((item) => (
            <Link key={item.id} to={item.to} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "#ffffff",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}

          {/* Login Button */}

          {
            isAuthenticated ? <LoginButton label={"Logout"} mode={"Logout"} /> : <LoginButton label={"Login"}mode={"Login"} />
          }
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
