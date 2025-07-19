import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NavBar from '../../Layouts/NavBar';

const ProtectedMessage = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          backgroundColor: '#f5f5f5',
          px: 2
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 500,
            textAlign: 'center',
            borderRadius: 4,
            backgroundColor: '#fff',
          }}
        >
          <LockOutlinedIcon color="error" sx={{ fontSize: 50, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Access Denied
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page is restricted to admin users only.
            <br />
            Please contact your administrator if you believe this is a mistake.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default ProtectedMessage;