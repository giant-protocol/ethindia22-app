import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StepHeaderText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "0.9rem",
  fontWeight: "500",
}));

const StepBodyText = styled(Typography)(({ theme }) => ({
  fontSize: "0.7rem",
}));

export const S = {
  StepHeaderText,
  StepBodyText,
};
