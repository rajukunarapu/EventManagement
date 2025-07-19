import React, { useState } from 'react'
import AddEventForm from '../Forms/AddEventForm'
import SubmitButton from './SubmitButton'

const AdminMainWrapper = () => {

    const [isAddEventFormOpen, setAddEventFormOpen] = useState(false)

    const handleSubmit = ()=>{
        setAddEventFormOpen(true)
    }

  return (
    <>
        <SubmitButton handleSubmit={handleSubmit} mt={2} label={"ADD EVENT"}  />

        {
            isAddEventFormOpen && <AddEventForm setAddEventFormOpen={setAddEventFormOpen} />
        }

        
    </>
  )
}

export default AdminMainWrapper
