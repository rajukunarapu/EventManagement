import React from 'react'
import { Box, Typography } from '@mui/material'
import PopularVenues from '../Components/Common/PopularVenues'

const ProductWrapper = ({data, loading}) => {
  return (
    <>
        <Box sx={{ height: "auto", mt: 5, p: "10px 60px", pb: 8}} >
            <Typography variant='body1' fontWeight={"bold"} >Popular Venue</Typography>
            <PopularVenues data={data} loading={loading} />
        </Box>
    </>
  )
}

export default ProductWrapper
