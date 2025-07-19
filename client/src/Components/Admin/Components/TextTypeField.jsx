import React from "react";
import { TextField } from "@mui/material";

const TextTypeField = ({ label, name, value, handleChange }) => {
  return (
    <>
      <TextField
        type="text"
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

export default TextTypeField;
