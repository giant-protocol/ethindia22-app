import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { S } from "./style";

const steps = [
  {
    id: 1,
    labelHeader: "Register number",
    lableBody:
      "Enter your phone number to convert it as wallet and link it with Polygon Id and World Id",
  },
  {
    id: 2,
    labelHeader: "Verify number",
    lableBody:
      "Verify your number with the SMS OTP code you received on your phone",
  },
  {
    id: 3,
    labelHeader: "Claim number",
    lableBody:
      "Hurray! Your number is successfully registered as a Wallet  to send and receive money",
  },
];

export default function CustomStepper({ activeStep, setActiveStep }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label.id} {...stepProps}>
              <StepLabel {...labelProps}>
                <S.StepHeaderText>{label.labelHeader}</S.StepHeaderText>
                <S.StepBodyText>{label.lableBody}</S.StepBodyText>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
