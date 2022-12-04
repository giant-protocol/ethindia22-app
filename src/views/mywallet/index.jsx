import { Box } from "@mui/system";
import React, { useState } from "react";
import { S } from "./style";
import SendIcon from "../../assets/icons/SendArrow.svg";
import ReceiveIcon from "../../assets/icons/ReceiveArrow.svg";
import InterchangeArrow from "../../assets/icons/InterchangeArrow.svg";
import ContactIcon from "../../assets/icons/ContactsIcon.svg";
import SuccessCheck from "../../assets/icons/SuccessCheck.svg";
import Dpay from "../../assets/icons/Dpay.svg";
import { InputAdornment, Typography } from "@mui/material";
import { useAppContext } from "../../context/app.context";
import { toWei } from "../../utils";
import ethindiaContractService from "../../ethereum/contract/ethindiaContractService";
import { checkIsRegistered } from "../../services/http/app.service";
const MyWallet = () => {
  const {
    setShowContactsModal,
    setShowTokensModal,
    userData,
    selectedChaindata,
    setShowApproveModal,
    setUserCurrencyValue,
    setAddressOfTheReceiver,
    setReceiverRegistered,
    setEscrowSenderId,
  } = useAppContext();
  const [cardState, setCardState] = useState("INIT");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");

  const handleSend = () => {
    checkIsRegistered(phoneNumber).then((res) => {
      setAddressOfTheReceiver(res.data.walletAddress);
      if (res.status === true) {
        if (selectedChaindata?.contract_ticker_symbol === "MATIC") {
          ethindiaContractService
            .sendFundToWallet(res.data.walletAddress, currencyValue)
            .then((res) => console.log(res, "res"));
        } else {
          setShowApproveModal(true);
          setReceiverRegistered(true);
        }
      } else {
        if (selectedChaindata?.contract_ticker_symbol === "MATIC") {
          ethindiaContractService
            .sendFundToEscrow(userData?.user?.userId, currencyValue, res.data)
            .then((res) => console.log(res, "res"));
        } else {
          setShowApproveModal(true);
          setReceiverRegistered(false);
          setEscrowSenderId(res.data);
        }
      }
    });
    // setCardState("SUCCESS");
  };

  return (
    <S.MyWalletWrapper>
      {cardState !== "SUCCESS" && <S.MainText>DPN: +01164504560</S.MainText>}

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
          {userData?.balance?.map((asset, index) => {
            let assetBalance = toWei(asset.balance);
            return (
              <S.AssetWrapper key={asset.id} id={asset.id}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img
                    src={index === 1 ? Dpay : asset.logo_url}
                    alt=""
                    style={{ height: "3rem" }}
                  />
                  {asset.name} {asset.contract_name}
                </Box>
                {assetBalance}&nbsp;{asset?.contract_ticker_symbol}
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
              <S.CustomTextField
                placeholder="$0.00"
                type="tel"
                onChange={(e) => {
                  setCurrencyValue(e.target.value);
                  setUserCurrencyValue(e.target.value);
                }}
                value={currencyValue}
              />
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
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
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
              <Box
                sx={{ cursor: "pointer", padding: "0 1rem" }}
                onClick={() => setShowTokensModal(true)}
              >
                {selectedChaindata.length === 0 ? (
                  "Select the Currency"
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={selectedChaindata?.logo_url}
                      style={{ height: "2rem" }}
                      alt=""
                    />
                    <Typography>{selectedChaindata?.contract_name}</Typography>
                  </Box>
                )}
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
              <S.SendSecondaryBtn onClick={() => handleSend()}>
                Send
              </S.SendSecondaryBtn>
            </S.ButtonsContainer>
          </S.SendFooter>
        </S.SendContainer>
      )}

      {cardState === "SUCCESS" && (
        <S.SendContainer>
          <S.SendMoneyHeaderText>Send Money</S.SendMoneyHeaderText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img src={SuccessCheck} alt="" />
            <S.SendMoneyHeaderText sx={{ fontSize: "1.4rem !important" }}>
              Successful
            </S.SendMoneyHeaderText>
          </Box>

          <S.InputsContainer>
            <S.InputWrapper>
              Amount:
              <S.SuccessAmount>$100 | 2.34 ETH</S.SuccessAmount>
            </S.InputWrapper>
            <S.InputWrapper>
              To:
              <S.CustomInput
                type="text"
                placeholder="Enter phone number or wallet address"
                value="+919787370660"
                disableUnderline={true}
                disabled
              />
            </S.InputWrapper>
            <S.InputWrapper>
              Note:
              <S.CustomInput
                type="text"
                placeholder="Optional Message"
                disableUnderline={true}
                value="Payment for the Mobile development, App Design & App Marketing"
                minRows={2}
                disabled
              />
            </S.InputWrapper>
          </S.InputsContainer>

          <S.SendFooter>
            <S.PriceContainer>
              <S.ViewOntext>View on Etherscan</S.ViewOntext>
            </S.PriceContainer>
            <S.ButtonsContainer>
              <S.DoneBtn onClick={() => setCardState("INIT")}>Done</S.DoneBtn>
            </S.ButtonsContainer>
          </S.SendFooter>
        </S.SendContainer>
      )}
    </S.MyWalletWrapper>
  );
};

export default MyWallet;
