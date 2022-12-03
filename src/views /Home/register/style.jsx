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

const RegisterWrapper = styled(Box)(({ theme }) => ({
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
  height: "50%",
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
}));

export const S = {
  RegisterContainer,
  RegisterHeader,
  RegisterWrapper,
  RegisterBody,
  RegisterSubHeader,
  RegistrationPeriodContainer,
  MainButton,
  RegisterHeaderText,
  RegisterFooter,
};