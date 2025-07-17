import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate("/login")}
        variant="outlined"
        sx={{
          borderRadius: 5,
          p: "4px 20px",
          color: "black",
          borderColor: "red",
          borderWidth: "2px",
          textTransform: "capitalize",
          boxShadow: "none",
        }}
      >
        Login
      </Button>
    </>
  );
};

export default LoginButton;
