import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({handleSubmit, mt, label, color,}) => {
  return (
    <>
      <Button
      variant="contained"
      color={color?color:"secondary"}
      onClick={handleSubmit}
      sx={{
        width : "200px",
        mt : mt,
        px: 5,
        borderRadius: "10px",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "none",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      {label}
    </Button>
    </>
  );
};

export default SubmitButton;
