import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  useTheme,
} from "@mui/material";
// import { ExpandMore } from "@mui/icons-material";

const SharedDropDown = ({ list, value, setValue, label }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 200,
        mb: 1,
        "& .MuiInputBase-root": {
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          fontWeight: 500,
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        },
        "& .MuiSelect-icon": {
          color: theme.palette.primary.main,
        },
      }}
    >
      <TextField
        select
        label={label}
        variant="outlined"
        fullWidth
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
    </Box>
  );
};

export default SharedDropDown;
