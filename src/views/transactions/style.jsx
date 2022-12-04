import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";

const TransactionsWrapper = styled(Box)(({ theme }) => ({
  height: "91.5vh",
  width: "100%",
  marginTop: "5rem",
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2.5rem",
}));

const TransactionsContainer = styled(Box)(({ theme }) => ({
  height: "35rem",
  width: "35rem",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
  borderRadius: "0.625rem",
  background: "#FFFFFF",
  padding: "0 4rem",
  color: "#3A4451",
}));

const ContactsInput = styled(Input)(({ theme }) => ({
  background: "#FCFCFC",
  width: "100%",
}));

const AllTransactionsContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  minHeight: "25rem",
  maxHeight: "25rem",
  overflow: "auto",
}));

const Singletransaction = styled(Box)(({ theme }) => ({
  padding: "1.5rem 0",
  borderBottom: `1px solid #e2e2e2`,
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover": {
    background: "#E1F8ED",
  },
}));

const ClaimNowBtn = styled(Button)(({ theme }) => ({}));
const TransactionWrapper = styled(Box)(({ theme }) => ({}));

export const S = {
  TransactionsWrapper,
  TransactionsContainer,
  ContactsInput,
  AllTransactionsContainer,
  Singletransaction,
  ClaimNowBtn,
  TransactionWrapper,
};
