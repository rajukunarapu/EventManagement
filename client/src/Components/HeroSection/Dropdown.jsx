import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";

const Dropdown = ({ list, value, setValue, label, width = "250px" }) => {
  return (
    <Box
      sx={{
        mt: 1,
        mb: 1,
        width: width,
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: "#888",
            fontWeight: 500,
            "&.Mui-focused": {
              color: "#ff5722",
            },
          }}
        >
          {label}
        </InputLabel>

        <Select
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
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
        >
          {list.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;