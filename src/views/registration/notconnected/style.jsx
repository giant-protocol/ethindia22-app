import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const NotConnectedWrapper = styled(Box)(({ theme }) => ({
  marginTop: "5rem",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
}));

const NotConnectedText = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "400",
  color: theme.palette.common.white,
  textAlign: "center",
}));

const ConnectEthBtn = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  background: theme.palette.common.white,
  height: "50px",
  width: "300px",
  textTransform: "none",
  borderRadius: "3.125rem",
}));

const ConnectEthContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "30rem",
  width: "30rem",
  boxShadow: " 0px 22px 60px rgba(0, 0, 0, 0.09)",
  borderRadius: "3.125rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
}));

export const S = {
  NotConnectedWrapper,
  ConnectEthContainer,
  NotConnectedText,
  ConnectEthBtn,
};
