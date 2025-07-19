import React, { useState } from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";
import EmailTypeField from "./Components/EmailTypeField";
import PasswordTypeField from "./Components/PasswordTypeField";
import TextTypeField from "./Components/TextTypeField";
import ContinueButton from "./Components/ContinueButton";
import Dropdown from "../HeroSection/Dropdown";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../Services/signupAPI";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const SignUpCard = () => {

  const navigate = useNavigate();
  const { authCheck, setUserData } = useContext(AuthContext)

  const [fullName, setfullName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [adminCode, setadminCode] = useState("");
  const [isValidationAlertShow, setisValidationAlertShow] = useState(false);
  const [responseMessage, setresponseMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isResponseAlertShow, setisResponseAlertShow] = useState(false);

  const userPayload = {
    fullName,
    emailId,
    password,
    role,
    adminCode,
  };

  const handleClick = async () => {
    setisValidationAlertShow(true);
    if (emailId !== "" && password !== "") {
      setisValidationAlertShow(false);
      const data = await signupAPI(userPayload);
      setresponseMessage(data.message);
      setisSuccess(data.success);
      setisResponseAlertShow(true);
      if (data.success) {
        setemailId("");
        setpassword("");
        setUserData(data.userData)
        await authCheck();
        navigate("/");
      }
    }
  };

  return (
    <Box
      minHeight={"600px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        background: "linear-gradient(to right, #83a4d4, #b6fbff)",
        padding: 4,
      }}
    >
      <Box
        display={"flex"}
        borderRadius={4}
        boxShadow={5}
        overflow={"hidden"}
        width={{ xs: "95%", md: "65%" }}
        height="500px"
      >
        {/* Left Section */}
        <Box
          flex={1}
          sx={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            p: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight={"bold"} gutterBottom>
            Looks like you're new here!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#e0e0e0" }}>
            Sign up with your email to get started on your journey.
          </Typography>
          <Divider sx={{ my: 3, backgroundColor: "white", opacity: 0.3 }} />
          <Typography variant="caption" sx={{ color: "#d1d1d1" }}>
            Create an account to explore events, venues, and more.
          </Typography>
        </Box>

        {/* Right Section */}
        <Stack
          flex={1}
          spacing={2}
          p={5}
          sx={{
            backgroundColor: "white",
            justifyContent: "center",
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          <Typography variant="h5" fontWeight={"600"} color="primary">
            Create Account
          </Typography>

          <TextTypeField
            value={fullName}
            setValue={setfullName}
            label={"Enter Full Name"}
          />
          <EmailTypeField
            value={emailId}
            setValue={setemailId}
            label={"Enter Email"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <PasswordTypeField
            value={password}
            setValue={setpassword}
            label={"Enter Password"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <Dropdown
            list={["user", "admin"]}
            value={role}
            setValue={setrole}
            label={"Choose Role"}
            width="100%"
          />
          {role === "admin" && (
            <TextTypeField
              value={adminCode}
              setValue={setadminCode}
              label={"Enter Admin Code"}
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
            href="/login"
            fontWeight={"500"}
            sx={{
              textAlign: "center",
              mt: 1,
              "&:hover": { color: "#ff4081", transition: "0.3s" },
            }}
          >
            Already have an account? <strong>Login</strong>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUpCard;