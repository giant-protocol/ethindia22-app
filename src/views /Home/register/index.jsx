import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomOtpInput from "../../../components/otpinput";
import CustomStepper from "../../../components/stepper";
import { S } from "./style";

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [otp, setOtp] = React.useState("");

  const handleSubmitNumber = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleOtpVerification = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  console.log(activeStep, "activeStep");

  return (
    <S.RegisterContainer>
      <S.RegisterHeader>
        {activeStep === 0 && (
          <>
            <S.RegisterHeaderText>Register Phone Number</S.RegisterHeaderText>
            <S.RegisterSubHeader>
              Register phone number to use as a wallet
            </S.RegisterSubHeader>
          </>
        )}
        {activeStep === 1 && (
          <>
            <S.RegisterHeaderText>Enter the OTP code</S.RegisterHeaderText>
            <S.RegisterSubHeader>
              Enter the code sent to +1 9864256954
            </S.RegisterSubHeader>
          </>
        )}
        {activeStep === 2 && (
          <>
            <S.RegisterHeaderText>Claim Number</S.RegisterHeaderText>
          </>
        )}
      </S.RegisterHeader>

      <S.RegisterBody>
        {activeStep === 0 && (
          <S.PhoneNumberWrapper>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <S.RegisterSubHeader>Registration period</S.RegisterSubHeader>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>
            <S.MainButton onClick={handleSubmitNumber}>Continue</S.MainButton>
          </S.PhoneNumberWrapper>
        )}
        {activeStep === 1 && (
          <S.OtpWrapper>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <S.OtpSubText>6 Digit OTP Code</S.OtpSubText>
              <CustomOtpInput otp={otp} setOtp={setOtp} />
              <S.OtpSmallText>
                We sent you a code. If you did not
                <br /> receive the code tap to
                <S.ResendText>Resend</S.ResendText>
              </S.OtpSmallText>
            </Box>
            <S.MainButton onClick={handleOtpVerification}>
              Verify number
            </S.MainButton>
          </S.OtpWrapper>
        )}
      </S.RegisterBody>

      <S.RegisterFooter>
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </S.RegisterFooter>
    </S.RegisterContainer>
  );
};

export default Register;
