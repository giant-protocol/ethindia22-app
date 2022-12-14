import { CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomOtpInput from "../../../components/otpinput";
import CustomStepper from "../../../components/stepper";
import AppStoreBadge from "../../../assets/AppStoreBadge.jpg";
import PlayStoreBadge from "../../../assets/GooglePlayBadge.jpg";
import DummyQrImg from "../../../assets/DummyQr.jpg";
import PolygonIdIcon from "../../../assets/icons/PolygonIDIcon.svg";
import WorldCoinIcon from "../../../assets/icons/WorldCoinIcon.svg";
import CongratsImg from "../../../assets/CongratsImg.jpg";
import Plus from "../../../assets/icons/Plus.svg";
import Minus from "../../../assets/icons/Minus.svg";

import { S } from "./style";
import { useAppContext } from "../../../context/app.context";
import {
  getUserStatus,
  sendOtp,
  verifyOtp,
} from "../../../services/http/app.service";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    activeStep,
    setActiveStep,
    setIsRegistered,
    setWalletLoading,
    setUserData,
    userData,
  } = useAppContext();
  const { account } = useWeb3React();
  const [otp, setOtp] = React.useState("");
  const [registrationPeriod, setRegistrationPeriod] = React.useState(1);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [QRCode, setQRCode] = React.useState("");
  const navigate = useNavigate();

  const handleSubmitNumber = () => {
    sendOtp(phoneNumber).then((res) => setActiveStep(activeStep + 1));
  };

  const handleOtpVerification = () => {
    verifyOtp(phoneNumber, otp, account).then((res) => {
      console.log(res, "res");
      setQRCode(`data:image/png;base64,${res.data}`);
      setActiveStep(activeStep + 1);
    });
  };

  const updateUserData = () => {
    getUserStatus(account)
      .then((res) => {
        setWalletLoading(false);
        setIsRegistered(true);
        navigate("/my-wallet");
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setWalletLoading(false);
      });
  };

  return (
    <S.RegisterContainer>
      {activeStep <= 2 && (
        <>
          <S.RegisterHeader>
            {activeStep === 0 && (
              <>
                <S.RegisterHeaderText>
                  Register Phone Number
                </S.RegisterHeaderText>
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
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <S.RegisterSubHeader
                      sx={{ marginBottom: "1rem !important" }}
                    >
                      Registration period
                    </S.RegisterSubHeader>
                    <S.RegistrationPeriodContainer>
                      <img
                        src={Minus}
                        alt=""
                        onClick={() =>
                          registrationPeriod !== 1 &&
                          setRegistrationPeriod((prev) => prev - 1)
                        }
                        style={{ cursor: "pointer" }}
                      />
                      <Typography
                        sx={{ fontWeight: "500", fontSize: "1.5rem" }}
                      >
                        {registrationPeriod} Year
                      </Typography>
                      <img
                        src={Plus}
                        alt=""
                        onClick={() =>
                          setRegistrationPeriod((prev) => prev + 1)
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </S.RegistrationPeriodContainer>

                    {/* <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    /> */}
                  </Box>
                </Box>
                <S.MainButton onClick={handleSubmitNumber}>
                  Continue
                </S.MainButton>
              </S.PhoneNumberWrapper>
            )}
            {activeStep === 1 && (
              <S.OtpWrapper>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <S.OtpSubText>6 Digit OTP Code</S.OtpSubText>
                  <CustomOtpInput otp={otp} setOtp={setOtp} />
                  <S.OtpSmallText>
                    We sent you a code. If you did not
                    <br /> receive the code tap to{" "}
                    <S.ResendText>Resend</S.ResendText>
                  </S.OtpSmallText>
                </Box>
                <S.MainButton onClick={handleOtpVerification}>
                  Verify number
                </S.MainButton>
              </S.OtpWrapper>
            )}
            {activeStep === 2 && (
              <S.ClaimWrapper>
                <S.ClaimNumberText>
                  {userData?.user?.phoneNumber}
                </S.ClaimNumberText>
                <S.QrWrapper>
                  {QRCode !== "" ? (
                    <S.DummyQrImg src={QRCode} alt="" />
                  ) : (
                    <CircularProgress />
                  )}
                </S.QrWrapper>
                <S.ClaimText>
                  <S.PolygonIdImg src={PolygonIdIcon} alt="" />
                  Use your Polygon ID app to scan and claim your phone number
                </S.ClaimText>
                <S.AppContainer>
                  <S.BadgeImage src={AppStoreBadge} alt="" />
                  <S.BadgeImage src={PlayStoreBadge} alt="" />
                </S.AppContainer>
                <S.MainButton onClick={() => setActiveStep(activeStep + 1)}>
                  Continue
                </S.MainButton>
              </S.ClaimWrapper>
            )}
          </S.RegisterBody>

          <S.RegisterFooter>
            <CustomStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </S.RegisterFooter>
        </>
      )}

      {activeStep === 3 && (
        <S.CongratsWrapper>
          <Box>
            <S.CongratsImg src={CongratsImg} />
            <S.CongratsText>Congratulations!</S.CongratsText>
          </Box>
          <S.CongratsSubText>
            You have successfuly claimed your <br /> Decentralized Phone Number
          </S.CongratsSubText>
          <S.MainButton onClick={updateUserData}>Continue</S.MainButton>
        </S.CongratsWrapper>
      )}
    </S.RegisterContainer>
  );
};

export default Register;
