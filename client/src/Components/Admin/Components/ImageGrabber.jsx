import React from 'react'
import ClodinaryAPI from '../../../Services/ClodinaryAPI'

const ImageGrabber = ({setImage, setIsImageUploading}) => {

    const handleClodinaryAPI = async(uploadImage)=>{
        setIsImageUploading(true)
        const imageURL = await ClodinaryAPI(uploadImage)
        setImage(imageURL)
        setIsImageUploading(false)
    }

    const handleChange = (e)=>{
        handleClodinaryAPI(e.target.files[0])
    }

  return (
    <>
        <input accept="image/*" type="file" onChange={handleChange} style={{ cursor : "pointer", padding:2 }} />

    </>
  )
}

export default ImageGrabber
