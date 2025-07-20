import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({handleSubmit, mt, label, color, isImageUploading}) => {
  return (
    <>
      <Button
      variant="contained"
      color={color}
      onClick={handleSubmit}
      disabled={isImageUploading}
      sx={{
        width : "140px",
        mt : mt,
        px: 2,
        borderRadius: "20px",
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
