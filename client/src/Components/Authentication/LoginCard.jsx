import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { useState } from "react";
import EmailTypeField from "./Components/EmailTypeField";
import PasswordTypeField from "./Components/PasswordTypeField";
import ContinueButton from "./Components/ContinueButton";
import { loginAPI } from "../../Services/loginAPI";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {

  const navigate = useNavigate();
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [isValidationAlertShow, setisValidationAlertShow] = useState(false);
  const [responseMessage, setresponseMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isResponseAlertShow, setisResponseAlertShow] = useState(false);

  const handleClick = async () => {
    setisValidationAlertShow(true);
    if (emailId !== "" && password !== "") {
      setisValidationAlertShow(false);
      const data = await loginAPI({ emailId: emailId, password: password });
      setresponseMessage(data.message);
      setisSuccess(data.success);
      setisResponseAlertShow(true);
      if (data.success) {
        setemailId("");
        setpassword("");
        navigate("/");
      }
    }
  };

  return (
    <>
      <Box
        maxHeight={"600px"}
        sx={{
          m: 5,
          backgroundColor: "whitesmoke",
          padding: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"column"}
          position={"relative"}
          width={"25%"}
          p={"30px"}
          sx={{ backgroundColor: "rgb(40, 116, 240)", height:"450px" }}
        >
          <Typography variant="h5" color="white" fontWeight={"bold"}>
            Login
          </Typography>
          <Typography variant="h6" mt={2} sx={{ color: "#dbdbdb" }}>
            Get access to your Venues, Wishlist and Recommendations
          </Typography>
        </Stack>

        <Stack
          direction={"column"}
          maxHeight={"450px"}
          width={"30%"}
          p={"30px"}
          alignItems={"center"}
          sx={{ backgroundColor: "white", height:"450px" }}
        >
          <EmailTypeField
            value={emailId}
            setValue={setemailId}
            label={"Enter emailId"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <PasswordTypeField
            value={password}
            setValue={setpassword}
            label={"Enter password"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <ContinueButton
            handleClick={handleClick}
            responseAlertMessage={responseMessage}
            isAlertSuccess={isSuccess}
            isResponseAlertShow={isResponseAlertShow}
          />
          <Link
            underline="hover"
            href={"/signup"}
            mt={3}
            fontWeight={"bold"}
            sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          >
            New to platform? Create an account
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default LoginCard;
