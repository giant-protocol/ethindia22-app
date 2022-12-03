import { Box } from "@mui/system";
import React, { useState } from "react";
import { S } from "./style";
import SendIcon from "../../assets/icons/SendArrow.svg";
import ReceiveIcon from "../../assets/icons/ReceiveArrow.svg";
import InterchangeArrow from "../../assets/icons/InterchangeArrow.svg";
import ContactIcon from "../../assets/icons/ContactsIcon.svg";
import { ASSETS_LIST } from "../../utils/constants";
import { InputAdornment } from "@mui/material";
import { useAppContext } from "../../context/app.context";
const MyWallet = () => {
  const { setShowContactsModal, setShowTokensModal } = useAppContext();
  const [cardState, setCardState] = useState("SEND");

  return (
    <S.MyWalletWrapper>
      <S.MainText>DPN: +01164504560</S.MainText>

      {cardState === "INIT" && (
        <S.BtnWrapper>
          <S.SendBtn onClick={() => setCardState("SEND")}>
            <S.BtnIcon src={SendIcon} alt="" /> Send
          </S.SendBtn>
          <S.SendBtn>
            <S.BtnIcon src={ReceiveIcon} alt="" /> Request
          </S.SendBtn>
        </S.BtnWrapper>
      )}

      {cardState === "INIT" && (
        <S.AssetsContainer>
          <S.AssetsHeader>
            <S.AssetsHeaderText>Assets</S.AssetsHeaderText>
          </S.AssetsHeader>
          {ASSETS_LIST.map((asset) => {
            return (
              <S.AssetWrapper key={asset.id} id={asset.id}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img src={asset.icon} alt="" />
                  {asset.name}: {asset.value}
                </Box>
                {asset.dollar}
              </S.AssetWrapper>
            );
          })}
        </S.AssetsContainer>
      )}

      {cardState === "SEND" && (
        <S.SendContainer>
          <S.SendMoneyHeaderText>Send Money</S.SendMoneyHeaderText>
          <S.InputContainer>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <S.CustomTextField placeholder="$0.00" type="tel" />
              <S.InputSubText>0.00 ETH</S.InputSubText>
            </Box>
            <img src={InterchangeArrow} alt="" />
          </S.InputContainer>

          <S.InputsContainer>
            <S.InputWrapper>
              To:{" "}
              <S.CustomInput
                type="text"
                placeholder="Enter phone number or wallet address"
                disableUnderline={true}
                endAdornment={
                  <InputAdornment
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowContactsModal(true)}
                    position="end"
                  >
                    <img src={ContactIcon} alt="" />
                  </InputAdornment>
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              Currency:&nbsp;
              {/* <S.CustomInput
                type="text"
                placeholder="Enter phone number or wallet address"
                disableUnderline={true}
              /> */}
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => setShowTokensModal(true)}
              >
                Etherum
              </Box>
            </S.InputWrapper>
            <S.InputWrapper>
              Note:{" "}
              <S.CustomInput
                type="text"
                placeholder="Optional Message"
                disableUnderline={true}
              />
            </S.InputWrapper>
          </S.InputsContainer>

          <S.SendFooter>
            <S.PriceContainer>
              <S.PriceText>Price : 1 ETH = $500</S.PriceText>
              <S.PriceText>ETH available : 0.21 = $100</S.PriceText>
            </S.PriceContainer>
            <S.ButtonsContainer>
              <S.CancelBtn>Cancel</S.CancelBtn>
              <S.SendSecondaryBtn>Send</S.SendSecondaryBtn>
            </S.ButtonsContainer>
          </S.SendFooter>
        </S.SendContainer>
      )}
    </S.MyWalletWrapper>
  );
};

export default MyWallet;
