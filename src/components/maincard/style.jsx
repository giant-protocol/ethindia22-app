import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MainCardContainer = styled(Box)(({ theme }) => ({
  height: "40rem",
  width: "50rem",
  background: theme.palette.common.white,
  borderRadius: "3.125rem",
  boxShadow: "0px 22px 60px rgba(0, 0, 0, 0.1)",
  color: "black",
}));

const ScreenContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5rem",
  alignItems: "center",
  height: "100%",
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "400",
  textAlign: "center",
}));
const GetStartedBtn = styled(Button)(({ theme }) => ({
  height: "5rem",
  width: "28.125rem",
  borderRadius: "3.125rem",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  textTransform: "none",
  fontSize: "1.875rem",
}));

export const S = {
  MainCardContainer,
  MainText,
  GetStartedBtn,
  ScreenContainer,
};
