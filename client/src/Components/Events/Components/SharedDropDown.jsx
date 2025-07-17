import React from "react";
import { Autocomplete, TextField, useTheme } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const SharedDropDown = ({ list, value, setValue, label }) => {
  const theme = useTheme();

  return (
    <Autocomplete
      size="small"
      sx={{
        width: 200,
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
          backgroundColor: "#f9f9f9",
          fontWeight: 500,
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        },
        "& .MuiAutocomplete-popupIndicator": {
          color: theme.palette.primary.main,
        },
      }}
      options={list}
      value={value}
      onChange={(event, newValue) => newValue && setValue(newValue)}
      popupIcon={<ExpandMore />}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default SharedDropDown;