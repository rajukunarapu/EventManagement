import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SelectButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<SearchIcon />}
      sx={{
        px: 5,
        py: 1.5,
        borderRadius: "25px",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "none",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "linear-gradient(135deg, #fad0c4, #ff9a9e)",
          transform: "scale(1.05)",
        },
      }}
    >
      Search
    </Button>
  );
};

export default SelectButton;