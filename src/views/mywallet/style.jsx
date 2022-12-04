import styled from "@emotion/styled";
import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MyWalletWrapper = styled(Box)(({ theme }) => ({
  height: "91.5vh",
  width: "100%",
  marginTop: "5rem",
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.5rem",
}));

const MainText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  fontWeight: "500",
}));
const SendBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  display: "flex",
  gap: "1rem",
  background: "#DFF2E9",
  borderRadius: "3.125rem",
  padding: "0.2rem 1rem",
}));
const BtnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
}));
const BtnIcon = styled.img(({ theme }) => ({
  height: "0.6rem",
}));
const AssetsContainer = styled(Box)(({ theme }) => ({
  height: "35rem",
  width: "35rem",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
  borderRadius: "0.625rem",
  background: "#FFFFFF",
  padding: "0 4rem",
  color: "#3A4451",
}));
const AssetsHeader = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid #e2e2e2`,
  height: "5rem",
  display: "grid",
  placeContent: "center",
}));
const AssetsHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "400",
}));
const AssetWrapper = styled(Typography)(({ theme, id }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.8rem",
  borderBottom: id !== 6 ? `0.1px solid #e2e2e2` : "unset",
}));
const SendContainer = styled(Typography)(({ theme }) => ({
  height: "40rem",
  width: "30rem",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
  borderRadius: "0.625rem",
  background: "#FFFFFF",
  padding: "2rem 2rem",
  color: "#3A4451",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));
const SendMoneyHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#646464",
  fontWeight: "500",
}));
const InputContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
}));
const CustomTextField = styled.input(({ theme }) => ({
  fontSize: "2.5rem",
  color: "#646464",
  fontWeight: "500",
  border: "none",
  outline: "none",
  display: "flex",
  textAlign: "center",
  width: "60%",
}));

const InputSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#646464",
}));
const InputsContainer = styled(Box)(({ theme }) => ({
  gap: "2rem",
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));
const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));
const CustomInput = styled(Input)(({ theme }) => ({
  fontSize: "1rem",
  padding: "0 1rem",
  color: "#646464",
  fontWeight: "500",
  border: "none",
  outline: "none",
  width: "100%",
}));
const PriceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
const PriceText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
}));
const ButtonsContainer = styled(Box)(({ theme }) => ({
  fontSize: "0.8rem",
  display: "flex",
  gap: "2rem",
}));
const SendFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));
const CancelBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "3.125rem",
  background: "#EFF2F7",
  color: theme.palette.common.black,
  fontSize: "1.2rem",
  padding: "1rem",
  width: "12rem",
}));
const ViewOntext = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
}));
const SuccessAmount = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
  paddingLeft: "1rem",
}));
const DoneBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "3.125rem",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: "1.2rem",
  padding: "1rem",
  width: "25rem",
  "&:hover": {
    background: theme.palette.primary.main,
    opacity: 0.75,
  },
  "&:disabled": {
    background: "#C5C5C5",
    color: theme.palette.primary.contrastText,
  },
}));

const SendSecondaryBtn = styled(CancelBtn)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const ContactsInput = styled(Input)(({ theme }) => ({
  background: "#FCFCFC",
  margin: "0 2rem",
}));

export const S = {
  MyWalletWrapper,
  MainText,
  SendBtn,
  BtnIcon,
  BtnWrapper,
  AssetsContainer,
  AssetsHeader,
  AssetsHeaderText,
  AssetWrapper,
  SendContainer,
  SendMoneyHeaderText,
  CustomTextField,
  InputContainer,
  InputSubText,
  InputsContainer,
  CustomInput,
  InputWrapper,
  PriceContainer,
  PriceText,
  ButtonsContainer,
  CancelBtn,
  DoneBtn,
  SendSecondaryBtn,
  SendFooter,
  ViewOntext,
  SuccessAmount,
  ContactsInput,
};
