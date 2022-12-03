import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomStepper from "../../../components/stepper";
import { S } from "./style";

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSubmitNumber = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <S.RegisterContainer>
      <S.RegisterHeader>
        <S.RegisterHeaderText>Register Phone Number</S.RegisterHeaderText>
        <S.RegisterSubHeader>
          Register phone number to use as a wallet
        </S.RegisterSubHeader>
      </S.RegisterHeader>
      <S.RegisterBody>
        <S.RegisterWrapper>
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
        </S.RegisterWrapper>
      </S.RegisterBody>
      <S.RegisterFooter>
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </S.RegisterFooter>
    </S.RegisterContainer>
  );
};

export default Register;
