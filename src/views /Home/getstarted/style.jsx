import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const getStartedContainer = styled(Box)(({ theme }) => ({
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
  MainText,
  GetStartedBtn,
  getStartedContainer,
};
