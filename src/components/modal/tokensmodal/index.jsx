import { InputAdornment, Modal, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../context/app.context";
import CloseIcon from "../../../assets/icons/CloseIcon.svg";
import Searchicon from "../../../assets/icons/SearchIcon.svg";
import { S } from "./style";
import { ASSETS_LIST } from "../../../utils/constants";
import { Box } from "@mui/system";

const TokensModal = () => {
  const { showTokensModal, setShowTokensModal } = useAppContext();

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
          {ASSETS_LIST.map((asset) => {
            return (
              <S.SingleContact key={asset.id}>
                <Box
                  sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <img src={asset.icon} alt="" />
                  <S.ContactNameText>{asset.name}</S.ContactNameText>
                </Box>
                <S.ContactNumber>{asset.value}</S.ContactNumber>
              </S.SingleContact>
            );
          })}
        </S.ContactListContainer>
      </S.ContactsModalContainer>
    </Modal>
  );
};

export default TokensModal;
