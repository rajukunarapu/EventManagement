import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import React, { useState } from "react";

const AdminWrapper = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
    type: "",
    guestCapacity: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Submitted Data:", formData);
    setFormData({
      name: "",
      location: "",
      image: "",
      type: "",
      guestCapacity: "",
      rating: "",
    });
  };

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        sx={{
          m: 4,
          p: 4,
          maxWidth: 500,
          background: "linear-gradient(to right, #fdfbfb, #ebedee)",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: "bold",
            background: "linear-gradient(to right, #ff6a00, #ee0979)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Add New Event / Venue
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Venue Name"
            name="name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            label="Location"
            name="location"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.location}
            onChange={handleChange}
            required
          />

          <TextField
            label="Image URL"
            name="image"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.image}
            onChange={handleChange}
          />

          <TextField
            select
            label="Event Type"
            name="type"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.type}
            onChange={handleChange}
            required
          >
            {["Wedding", "Conference", "Exhibition", "Party", "Concert"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Guest Capacity (e.g., 200-500)"
            name="guestCapacity"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.guestCapacity}
            onChange={handleChange}
            required
          />

          <TextField
            label="Rating (1 to 5)"
            name="rating"
            type="number"
            inputProps={{ min: 1, max: 5 }}
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            value={formData.rating}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              color: "white",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(to right, #ff7043, #ff5e62)",
              },
            }}
          >
            Add Event
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdminWrapper;