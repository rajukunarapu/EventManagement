import React from "react";
import { TextField } from "@mui/material";

const NumberTypeField = ({ label, name, value, handleChange }) => {
  return (
    <>
      <TextField
        type="number"
        label={label}
        name={name}
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={value}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default NumberTypeField;
