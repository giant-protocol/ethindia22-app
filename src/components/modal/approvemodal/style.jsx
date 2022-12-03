import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ApproveModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.common.white,
  borderRadius: "15px !important",
  outline: "none",
  border: "none",
  boxShadow: "none",
  padding: "0 0rem",
  color: theme.palette.text.primary,
  width: "35rem",
  height: "30rem",
}));

const ApproveModalHeader = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  display: "grid",
  placeContent: "center",
  position: "relative",
  height: "5rem",
}));

const ApproveModalBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  height: "75%",
}));

const ApproveText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
  textAlign: "center",
}));

const NumberText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
  textAlign: "center",
}));

const LearnMoreText = styled.span(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
  textAlign: "center",
  color: theme.palette.primary.main,
  cursor: "pointer",
}));

const ApproveBtn = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
  textTransform: "none",
  borderRadius: "3.125rem",
  height: "3rem",
  width: "8rem",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    background: theme.palette.primary.main,
    opacity: 0.75,
  },
  "&:disabled": {
    background: "#C5C5C5",
    color: theme.palette.primary.contrastText,
  },
}));

export const S = {
  ApproveModalContainer,
  ApproveModalHeader,
  ApproveModalBody,
  ApproveText,
  ApproveBtn,
  LearnMoreText,
  NumberText,
};
