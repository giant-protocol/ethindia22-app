import { InputAdornment, Modal, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../context/app.context";
import CloseIcon from "../../../assets/icons/CloseIcon.svg";
import Searchicon from "../../../assets/icons/SearchIcon.svg";
import ChainLinkIcon from "../../../assets/icons/ChainLink.png";
import { S } from "./style";
import { Box } from "@mui/system";
import { toWei } from "../../../utils";

const TokensModal = () => {
  const {
    showTokensModal,
    setShowTokensModal,
    userData,
    setSelectedChainData,
  } = useAppContext();

  const handleClose = () => {
    setShowTokensModal(false);
  };

  return (
    <Modal
      open={showTokensModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ContactsModalContainer>
        <S.ContactsModalHeader>
          All tokens
          <img
            src={CloseIcon}
            style={{
              position: "absolute",
              right: "1rem",
              top: "1.8rem",
              cursor: "pointer",
            }}
            alt=""
            onClick={handleClose}
          />
        </S.ContactsModalHeader>

        <S.ContactsInput
          type="text"
          placeholder="Filter token"
          disableUnderline={true}
          startAdornment={
            <InputAdornment sx={{ cursor: "pointer" }} position="start">
              <img src={Searchicon} alt="" />
            </InputAdornment>
          }
        />

        <S.ContactListContainer>
          {userData?.balance?.map((asset, index) => {
            let assetBalance = toWei(asset.balance);

            return (
              <S.SingleContact
                key={asset.id}
                onClick={async () => {
                  await setSelectedChainData(asset);
                  handleClose();
                }}
              >
                <Box
                  sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <img
                    src={index === 1 ? ChainLinkIcon : asset.logo_url}
                    alt=""
                    style={{ height: "3rem" }}
                  />
                  <S.ContactNameText>{asset.contract_name}</S.ContactNameText>
                </Box>
                <S.ContactNumber>
                  {assetBalance}&nbsp;{asset?.contract_ticker_symbol}
                </S.ContactNumber>
              </S.SingleContact>
            );
          })}
        </S.ContactListContainer>
      </S.ContactsModalContainer>
    </Modal>
  );
};

export default TokensModal;
