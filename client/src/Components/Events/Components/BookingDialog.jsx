import React from 'react'
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import EventCard from './EventCard'

const BookingDialog = ({ open, setVenueClick }) => {
  return (
    <>
        <Dialog open={open} onClose={()=>setVenueClick(false)} >
            <DialogContent>
                <EventCard />
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={()=>setVenueClick(false)} color='error' sx={{}} >Cancel</Button>
                <Button variant='contained' color='secondary' >Book Event</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default BookingDialog
