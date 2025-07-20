import { Button } from "@mui/material";
import React from "react";

const ContinueButton = ({handleClick}) => {
  return (
    <Button
      variant="contained"
      color="scuccess"
      onClick={()=>handleClick()}
      sx={{
        borderRadius : "15px",
        height : "50px",
        width : "150px",
        color : "white",
        fontWeight : "bolder",
        textTransform : "capitalize"
      }}
    >
      Search
    </Button>
  );
};

export default ContinueButton;