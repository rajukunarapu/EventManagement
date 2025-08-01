import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Stack,
  Snackbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import LoginButton from "../Components/Common/LoginButton";
import MuiAlert from "@mui/material/Alert";

const NavBar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  // showing logout alert
  const [logoutAlertShow, setlogoutAlertShow] = useState(false);
  // For changing background of navbar

  const navLinks = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Admin", to: "/admin" },
    { id: 3, name: "Venues", to: "/events" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          background: "#ffffff",
          transition: "background 0.3s ease-in-out",
          px: { xs: 2, md: 5 },
          py: 1,
          overflowY: "hidden",
          color: "#fff",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction={"row"} spacing={0.2} alignItems={"center"}>
            <svg
              width="40"
              height="45"
              viewBox="0 0 25 25"
              fill={"#da1748ff"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.8 9.685c4.7-1.582 5.5-5.703 4.9-9.492 0-.137.12-.234.24-.176 4.5 2.13 9.56 6.797 9.56 13.828C22.5 19.235 18.22 24 12 24 5.36 24 1.5 19.371 1.5 13.845c0-3.223 2.34-6.543 4.86-7.95.12-.077.28 0 .28.138.06.722.26 2.558 1.08 3.632.02.02.06.02.08.02"
                clipRule="evenodd"
              />
            </svg>
            <Typography variant="h5" fontWeight={"bolder"} color={"black"}> 
              Tinder
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, sm: 4 },
              alignItems: "center",
            }}
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      color:"#000",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      borderRadius: 2,
                      borderBottom: isActive
                        ? `3px solid red`
                        : "none",
                      backgroundColor: isActive
                        ? "#f0f0f0"
                        : "transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}

            {isAuthenticated ? (
              <LoginButton
                label={"Logout"}
                mode={"Logout"}
                setlogoutAlertShow={setlogoutAlertShow}
              />
            ) : (
              <LoginButton label={"Login"} mode={"Login"} />
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Snackbar
        open={logoutAlertShow}
        autoHideDuration={4000}
        onClose={() => setlogoutAlertShow(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={() => setlogoutAlertShow(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Logout successful!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default NavBar;
