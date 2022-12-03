import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  padding: "50px",
}));

const RegisterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
}));

const RegisterBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
}));

const PhoneNumberWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  margin: "auto",
  width: "65%",
  height: "100%",
  padding: "1rem",
}));

const OtpWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  margin: "auto",
  width: "65%",
  height: "100%",
  padding: "1rem",
}));

const ClaimWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  position: "relative",
  margin: "auto",
  width: "65%",
  height: "100%",
  padding: "1rem",
}));

const OtpSubText = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "1.5rem",
  color: theme.palette.grey[700],
}));

const OtpSmallText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "0.8rem",
  color: theme.palette.grey[700],
}));

const ClaimNumberText = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "1rem",
  color: theme.palette.grey[700],
}));

const ClaimText = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "0.8rem",
  color: theme.palette.grey[700],
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
}));

const QrWrapper = styled(Box)(({ theme }) => ({
  border: `4px solid ${theme.palette.primary.main}`,
  height: "190px",
  width: "190px",
  borderRadius: "0.5rem",
  display: "grid",
  placeContent: "center",
}));

const AppContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
}));

const PolygonIdImg = styled.img(({ theme }) => ({
  height: "1.3rem",
}));

const BadgeImage = styled.img(({ theme }) => ({
  height: "2.5rem",
}));

const DummyQrImg = styled.img(({ theme }) => ({
  height: "10rem",
}));

const ResendText = styled.span(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "400",
  fontSize: "0.8rem",
  textDecoration: "underline",
  cursor: "pointer",
}));

const RegisterHeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "2.125rem",
  color: theme.palette.grey[700],
}));

const RegisterSubHeader = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.grey[600],
  fontWeight: "400",
}));
const RegisterFooter = styled(Box)(({ theme }) => ({
  height: "35%",
  width: "100%",
}));

const RegistrationPeriodContainer = styled(Box)(({ theme }) => ({}));

const MainButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: "3.125rem",
  width: "20rem",
  height: "3rem",
  fontSize: "1rem",
  "&:hover": {
    background: theme.palette.primary.main,
    opacity: 0.75,
  },
  "&:disabled": {
    background: "#C5C5C5",
    color: theme.palette.primary.contrastText,
  },
}));

const CongratsWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
}));

const WorldCoinScreenWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
}));

const CongratsImg = styled.img(({ theme }) => ({
  height: "15rem",
  marginBottom: "1rem",
}));

const CongratsText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.grey[600],
  fontWeight: "500",
}));

const CongratsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.grey[600],
  fontWeight: "400",
}));

export const S = {
  RegisterContainer,
  RegisterHeader,
  PhoneNumberWrapper,
  RegisterBody,
  RegisterSubHeader,
  RegistrationPeriodContainer,
  MainButton,
  RegisterHeaderText,
  RegisterFooter,
  OtpWrapper,
  OtpSubText,
  OtpSmallText,
  ResendText,
  ClaimWrapper,
  ClaimNumberText,
  ClaimText,
  QrWrapper,
  AppContainer,
  BadgeImage,
  PolygonIdImg,
  DummyQrImg,
  CongratsWrapper,
  CongratsImg,
  CongratsText,
  CongratsSubText,
  WorldCoinScreenWrapper,
};
