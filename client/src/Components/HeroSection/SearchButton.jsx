import React from "react";
import { Button } from "@mui/material";

const SearchButton = ({handleClick}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={()=>handleClick()}
      sx={{
        px: 5,
        py: 1.5,
        borderRadius: "25px",
        background: "linear-gradient(135deg, #aecf35ff, #16b42bff)",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "none",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "linear-gradient(135deg, #22aca5ff, #127642ff)",
          transform: "scale(1.01)",
        },
      }}
    >
      Search
    </Button>
  );
};

export default SearchButton;