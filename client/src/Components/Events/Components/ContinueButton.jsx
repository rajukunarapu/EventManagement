import { Button } from "@mui/material";
import React from "react";

const ContinueButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "25px", // Matches the dropdown
        color: "#333",
        p:"5px 15px",
        borderColor: "#ccc",
        fontWeight: "bold",
        fontSize: "15px",
        height: "40px", // Close to dropdown height
        width : "100px",
        textTransform: "none",
        backgroundColor: "#f9f9f9",
        '&:hover': {
          backgroundColor: "#e0e0e0",
          borderColor: "#aaa",
        },
      }}
    >
      Search
    </Button>
  );
};

export default ContinueButton;