import { Box, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import { footerLinks } from "../utils/FooterHelper";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        py: 6,
        px: { xs: 3, sm: 10 },
        boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        mt: 10,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 10 }}
        justifyContent="center"
        alignItems={{ xs: "flex-start", md: "flex-start" }}
      >
        {footerLinks.map((section) => (
          <Stack key={section.id} spacing={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#1c1c1c", mb: 1 }}
            >
              {section.name}
            </Typography>
            {section.linkName.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color: "#444",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#ff4b2b",
                    pl: 1,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 4 }} />
      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
        sx={{ fontStyle: "italic" }}
      >
        © {new Date().getFullYear()} Eventify. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;