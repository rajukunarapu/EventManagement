import React from 'react'
import { Box } from '@mui/material'
import image from 'shardayyy-photography-fJzmPe-a0eU-unsplash (1).jpg'

const EventBackground = () => {
  return (
    <>
        <Box sx={{ height : "420px", m:4, borderRadius : "40px" }} >
            <img src={image} alt='image' width={"100%"} height={"100%"} style={{objectFit : "cover"}} />
        </Box>
    </>
  )
}

export default EventBackground
