import React from "react";
import { MenuItem, TextField } from "@mui/material";

const DropdownType = ({ list, value, setValue, label }) => {
  return (
    <TextField
      select
      label={label}
      variant="outlined"
      fullWidth
      sx={{ mb: 2 }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    >
      {list.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropdownType;
