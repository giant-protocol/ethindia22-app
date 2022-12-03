import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5rem",
  alignItems: "center",
  height: "100%",
}));

const RegisterHeader = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
}));

export const S = {
  RegisterContainer,
  RegisterHeader,
};
