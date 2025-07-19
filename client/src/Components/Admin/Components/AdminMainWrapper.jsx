import React, { useState } from 'react'
import AddEventForm from '../Forms/AddEventForm'
import SubmitButton from './SubmitButton'
import { Box } from '@mui/material'

const AdminMainWrapper = () => {

    // opening add event form
    const [isAddEventFormOpen, setAddEventFormOpen] = useState(false)
    // handling state variable for add event form
    const handleSubmit = ()=>{
        setAddEventFormOpen(true)
    }

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} m={4} >
        <SubmitButton handleSubmit={handleSubmit} mt={2} label={"Add Event"} />
        {
          // opens the add event from if variable is true
            isAddEventFormOpen && <AddEventForm setAddEventFormOpen={setAddEventFormOpen} />
        }
      </Box>
        

        
    </>
  )
}

export default AdminMainWrapper
