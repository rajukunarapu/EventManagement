import React from 'react'
import { Box, Typography } from '@mui/material'
import PopularVenues from '../Components/Common/PopularVenues'

const ProductWrapper = () => {
  return (
    <>
        <Box sx={{ height : "450px", mt:5, p:"10px 60px" }} >
            <Typography variant='body1' fontWeight={"bold"} >Popular Venue</Typography>
            <PopularVenues/>
        </Box>
    </>
  )
}

export default ProductWrapper
