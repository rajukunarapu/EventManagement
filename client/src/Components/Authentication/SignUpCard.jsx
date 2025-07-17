import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { useState } from "react";
import EmailTypeField from "./Components/EmailTypeField";
import PasswordTypeField from "./Components/PasswordTypeField";
import ContinueButton from "./Components/ContinueButton";
import { useNavigate } from "react-router-dom";
import TextTypeField from "./Components/TextTypeField";
import Dropdown from "../HeroSection/Dropdown";
import { signupAPI } from "../../Services/signupAPI";

const SignUpCard = () => {
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [adminCode, setadminCode] = useState("");
  const [isValidationAlertShow, setisValidationAlertShow] = useState(false);
  const [responseMessage, setresponseMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isResponseAlertShow, setisResponseAlertShow] = useState(false);

  const userData = {
    fullName: fullName,
    emailId: emailId,
    password: password,
    role: role,
    adminCode: adminCode,
  };

  const handleClick = async () => {
    setisValidationAlertShow(true);
    if (emailId !== "" && password !== "") {
      setisValidationAlertShow(false);
      const data = await signupAPI(userData);
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
          maxHeight={"450px"}
          width={"25%"}
          p={"30px"}
          height={"100%"}
          sx={{ backgroundColor: "rgb(40, 116, 240)", height : "470px" }}
        >
          <Typography variant="h5" color="white" fontWeight={"bold"}>
            Looks like you're new here!
          </Typography>
          <Typography variant="h6" mt={2} sx={{ color: "#dbdbdb" }}>
            Sign up with your mobile number to get started
          </Typography>
        </Stack>

        <Stack
          direction={"column"}
          maxHeight={"470px"}
          width={"30%"}
          p={"30px"}
          alignItems={"center"}
          sx={{ backgroundColor: "white", height:"450px" }}
        >
          <TextTypeField
            value={fullName}
            setValue={setfullName}
            label={"Enter fullName"}
          />
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
          <Dropdown
            list={["user", "admin"]}
            value={role}
            setValue={setrole}
            label={"Choose the role"}
            width = "100%"
          />
          {role === "admin" && (
            <TextTypeField
              value={adminCode}
              setValue={setadminCode}
              label={"Enter code"}
            />
          )}

          <ContinueButton
            handleClick={handleClick}
            responseAlertMessage={responseMessage}
            isAlertSuccess={isSuccess}
            isResponseAlertShow={isResponseAlertShow}
          />
          <Link
            underline="hover"
            href={"/login"}
            mt={3}
            fontWeight={"bold"}
            sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          >
            Existing User? Log in
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default SignUpCard;
