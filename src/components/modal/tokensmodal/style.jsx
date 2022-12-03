import styled from "@emotion/styled";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ContactsModalContainer = styled(Box)(({ theme }) => ({
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
  width: "30rem",
  height: "30rem",
}));

const ContactsModalHeader = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  display: "grid",
  placeContent: "center",
  position: "relative",
  height: "5rem",
}));

const ContactsInput = styled(Input)(({ theme }) => ({
  background: "#FCFCFC",
  margin: "0 2rem",
}));

const ContactListContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxHeight: "20rem",
  padding: "1rem 0",
  overflowY: "auto",
}));
const SingleContact = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid #e2e2e2`,
  cursor: "pointer",
  "&:hover": {
    background: "#E1F8ED",
  },
}));
const ContactNumber = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
}));
const ContactNameText = styled(ContactNumber)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 400,
}));

export const S = {
  ContactsModalContainer,
  ContactsModalHeader,
  ContactsInput,
  ContactListContainer,
  SingleContact,
  ContactNumber,
  ContactNameText,
};
