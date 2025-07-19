import { Alert, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import TextTypeField from "../Components/TextTypeField";
import DropdownType from "../Components/DropdownType";
import SubmitButton from "../Components/SubmitButton";
import { addEventAPI } from "../../../Services/addEventAPI";
import { Close } from "@mui/icons-material";

const AddEventForm = ({ setAddEventFormOpen }) => {
  // State variables for grabbing input from user
  const [type, setType] = useState("");
  const [guestCapacity, setGuestCapacity] = useState("");
  const [rating, setRating] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
  });

  // successfull addevent alert message
  const [isSuccess, setIsSuccess] = useState(false);
  const [addEventAlertMessage, setaddEventAlertMessage] = useState("");

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
  const data = { ...formData, type, guestCapacity, rating };

  const handleSubmit = async (e) => {
    setIsEmptyFormSubmit(true)
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.location !== "" &&
      formData.image !== "" &&
      type !== "" &&
      guestCapacity !== "" &&
      rating !== ""
    ) {
      setIsEmptyFormSubmit(false)
      const res = await addEventAPI(data);
      setIsSuccess(res.success);
      setaddEventAlertMessage(res.message);
      if (res.success) {
        setFormData({
          name: "",
          location: "",
          image: "",
        });
        setType("");
        setGuestCapacity("");
        setRating("");
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
          <TextTypeField
            label={"Provide image URL"}
            name={"image"}
            value={formData.image}
            handleChange={handleChange}
          />

          {/* Submit Button */}
          <SubmitButton
            handleSubmit={handleSubmit}
            mt={1}
            label={"continue"}
            color={"success"}
          />

          {/* Alert Message For Empty form submission */}
          {isEmptyFormSubmit && (
            <Alert
              severity={"error"}
              sx={{ mt:2, width: "250px" }}
            >
              All Fields must be provided
            </Alert>
          )}

          {/* Alert Message after submit the form */}
          {isSuccess && (
            <Alert
            onClick={()=>setIsSuccess(false)}
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
