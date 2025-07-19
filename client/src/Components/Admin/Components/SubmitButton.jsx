import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({handleSubmit, mt, label}) => {
  return (
    <>
      <Button
      variant="contained"
      color="primary"
      onClick={()=>handleSubmit()}
      sx={{
        mt : mt,
        px: 5,
        borderRadius: "10px",
        background: "linear-gradient(135deg, #5fb217ff, #870e6aff)",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "none",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "linear-gradient(135deg, #25a00fff, #664fccff)",
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
