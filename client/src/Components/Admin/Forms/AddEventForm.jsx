import { Alert, Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import TextTypeField from "../Components/TextTypeField";
import DropdownType from "../Components/DropdownType";
import SubmitButton from "../Components/SubmitButton";
import { addEventAPI } from "../../../Services/addEventAPI";
import { Close } from "@mui/icons-material";
import ImageGrabber from "../Components/ImageGrabber";

const AddEventForm = ({ setAddEventFormOpen, fetchData }) => {
  // State variables for grabbing input from user
  const [type, setType] = useState("");
  const [guestCapacity, setGuestCapacity] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("")

  //uploading image takes some time
  const [isImageUploading, setIsImageUploading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  // successfull addevent alert message
  const [isSuccess, setIsSuccess] = useState(false);
  const [addEventAlertMessage, setaddEventAlertMessage] = useState("");

  // For showing error message also from server
  const [isAlertShowForAPI, setIsAlertShowForAPI] = useState(false)

  // alert message for empty from submission
  const [isEmptyFormSubmit, setIsEmptyFormSubmit] = useState(false)

  // handling values of textTyped fields
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  // payload for API
  const data = { ...formData, type, guestCapacity, rating, image };

  const handleSubmit = async (e) => {
    // Showing Alert when all fields are empty while clicking 
    setIsEmptyFormSubmit(true)
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.location !== "" &&
      image !== "" &&
      type !== "" &&
      guestCapacity !== "" &&
      rating !== ""
    ) {
      // If every field is given, then no need to show alert
      setIsEmptyFormSubmit(false)
      const res = await addEventAPI(data);
      setIsAlertShowForAPI(true)
      setIsSuccess(res.success);
      setaddEventAlertMessage(res.message);
      if (res.success) {
        setFormData({
          name: "",
          location: ""
        });
        setImage("")
        setType("");
        setGuestCapacity("");
        setRating("");
        await fetchData();
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            borderRadius: 5,
            border: "3px solid orange",
            position:"relative"
          }}
        >
          <IconButton  sx={{position:"absolute", top:4, right:8}} onClick={()=>setAddEventFormOpen(false)} >
            <Close/>
          </IconButton>
          {/* For Venue name */}
          <TextTypeField
            label={"Venue name"}
            name={"name"}
            value={formData.name}
            handleChange={handleChange}
          />
          {/* For Location */}
          <TextTypeField
            label={"Location"}
            name={"location"}
            value={formData.location}
            handleChange={handleChange}
          />
          {/* Type of event */}
          <DropdownType
            list={["Wedding", "Conference", "Exhibition", "Party", "Concert"]}
            label={"Event Type"}
            value={type}
            setValue={setType}
          />
          {/* GuestCapacity */}
          <DropdownType
            list={["upto 200", "200-500", "500-1000", "morethan 1000"]}
            label={"Guest Capacity"}
            value={guestCapacity}
            setValue={setGuestCapacity}
          />
          {/* Rating */}
          <DropdownType
            list={["1", "2", "3", "4", "5"]}
            label={"Rating"}
            value={rating}
            setValue={setRating}
          />

          {/* Image */}
          <Stack direction={"row"} spacing={4} alignItems={"center"} >
            <Typography variant="body1" color="black" fontWeight={"bold"} >Upload the image</Typography>
            <ImageGrabber setImage={setImage} setIsImageUploading={setIsImageUploading} />
          </Stack>
          

          {/* Submit Button */}
          <SubmitButton
            handleSubmit={handleSubmit}
            isImageUploading={isImageUploading}
            mt={2}
            label={"continue"}
            color={"success"}
          />

          {/* Alert Message For Empty form submission */}
          {isEmptyFormSubmit && (
            <Alert
            onClose={()=>setIsEmptyFormSubmit(false)}
              severity={"error"}
              sx={{ mt:2, width: "250px" }}
            >
              All Fields must be provided
            </Alert>
          )}

          {/* Alert Message after submit the form */}
          {isAlertShowForAPI && (
            <Alert
            onClose={()=>setIsAlertShowForAPI(false)}
              severity={isSuccess ? "success" : "error"}
              sx={{ mt:2, width: "250px" }}
            >
              {addEventAlertMessage}
            </Alert>
          )}
        </Box>
      </Box>
    </>
  );
};

export default AddEventForm;
