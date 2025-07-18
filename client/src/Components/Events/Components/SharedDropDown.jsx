import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const SharedDropDown = ({ list, value, setValue, label }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 200,
        mb: 1,
        "& .MuiInputBase-root": {
          borderRadius: "50px",
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
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel
          sx={{
            fontWeight: 500,
            color: "#888",
            "&.Mui-focused": {
              color: theme.palette.primary.main,
            },
          }}
        >
          {label}
        </InputLabel>

        <Select
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
          IconComponent={ExpandMore}
        >
          {list.map((item, idx) => (
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SharedDropDown;