import { Alert, Box } from "@mui/material";
import React, { useState } from "react";
import TextTypeField from "../Components/TextTypeField";
import DropdownType from "../Components/DropdownType";
import NumberTypeField from "../Components/NumberTypeField";
import SubmitButton from "../Components/SubmitButton";
import { addEventAPI } from "../../../Services/addEventAPI";

const AddEventForm = ({ setAddEventFormOpen }) => {
  const [eventType, setEventType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    guestCapacity: "",
    rating: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [addEventAlertMessage, setaddEventAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    const res = await addEventAPI({
      ...formData,
      eventType,
    });
    setIsSuccess(res.success);
    setaddEventAlertMessage(res.message);
    if (res.success) {
      setFormData({
        name: "",
        location: "",
        guestCapacity: "",
        rating: "",
      });
      setEventType("");
      setAddEventFormOpen(false);
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        value={eventType}
        setValue={setEventType}
      />
      {/* GuestCapacity */}
      <NumberTypeField
        label={"Guest Capacity (e.g., 200-500)"}
        name={"guestCapacity"}
        value={formData.guestCapacity}
        handleChange={handleChange}
      />
      {/* Rating */}
      <NumberTypeField
        label={"Rating (1 to 5)"}
        name={"rating"}
        value={formData.rating}
        handleChange={handleChange}
      />
      {/* Submit Button */}
      <SubmitButton handleSubmit={handleSubmit} mt={1} label={"continue"} />

      {/* Alert Message after submit the form */}
      {isSuccess && (
        <Alert
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "250px", borderRadius: 10 }}
        >
          {addEventAlertMessage}
        </Alert>
      )}
    </Box>
  );
};

export default AddEventForm;
