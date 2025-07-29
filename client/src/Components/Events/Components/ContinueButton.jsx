import React from "react";
import { Button } from "@mui/material";

const ContinueButton = ({ handleClick }) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        background: "linear-gradient(45deg, #88cc1bff, #e9269eff)",
        "&:hover": {
          background: "linear-gradient(45deg, #e9269eff, #88cc1bff)",
        },
        borderRadius: "25px",
        height: "50px",
        width: "150px",
        color: "white",
        fontWeight: "bolder",
        textTransform: "capitalize",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
      }}
    >
      Search
    </Button>
  );
};

export default ContinueButton;
