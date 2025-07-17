import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const Dropdown = ({ list, value, setValue, label, width, size = "medium" }) => {
  return (
    <Autocomplete
      sx={{
        mt: 1,
        mb: 1,
        width: width ? "100%" : "250px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease-in-out",
        '&:hover': {
          boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: "12px",
        },
        '& .MuiAutocomplete-popupIndicator': {
          color: '#ff7043',
        },
      }}
      options={list}
      value={value}
      onChange={(event, newValue) => {
        if (newValue) setValue(newValue);
      }}
      size={size}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          sx={{
            "& .MuiInputLabel-root": {
              color: "#888",
              fontWeight: 500,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffb199",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ff7043",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ff5722",
            },
          }}
        />
      )}
    />
  );
};

export default Dropdown;