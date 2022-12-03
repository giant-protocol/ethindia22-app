import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const CustomOtpInput = ({ otp, setOtp }) => {
  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return <MuiOtpInput value={otp} length={6} onChange={handleChange} />;
};

export default CustomOtpInput;
