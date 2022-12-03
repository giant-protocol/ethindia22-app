import { InputAdornment, Modal, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../context/app.context";
import CloseIcon from "../../../assets/icons/CloseIcon.svg";
import Searchicon from "../../../assets/icons/SearchIcon.svg";
import { S } from "./style";

const ContactsModal = () => {
  const { showContactsModal, setShowContactsModal } = useAppContext();

  const handleClose = () => {
    setShowContactsModal(false);
  };

  return (
    <Modal
      open={showContactsModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ContactsModalContainer>
        <S.ContactsModalHeader>
          Contacts
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
          placeholder="Find contacts"
          disableUnderline={true}
          startAdornment={
            <InputAdornment sx={{ cursor: "pointer" }} position="start">
              <img src={Searchicon} alt="" />
            </InputAdornment>
          }
        />

        <S.ContactListContainer>
          <S.SingleContact>
            <S.ContactNameText>Leo Anbarasan</S.ContactNameText>
            <S.ContactNumber>+1 209 2567 586 587</S.ContactNumber>
          </S.SingleContact>
          <S.SingleContact>
            <S.ContactNameText>Leo Anbarasan</S.ContactNameText>
            <S.ContactNumber>+1 209 2567 586 587</S.ContactNumber>
          </S.SingleContact>
          <S.SingleContact>
            <S.ContactNameText>Leo Anbarasan</S.ContactNameText>
            <S.ContactNumber>+1 209 2567 586 587</S.ContactNumber>
          </S.SingleContact>
          <S.SingleContact>
            <S.ContactNameText>Leo Anbarasan</S.ContactNameText>
            <S.ContactNumber>+1 209 2567 586 587</S.ContactNumber>
          </S.SingleContact>
          <S.SingleContact>
            <S.ContactNameText>Leo Anbarasan</S.ContactNameText>
            <S.ContactNumber>+1 209 2567 586 587</S.ContactNumber>
          </S.SingleContact>
        </S.ContactListContainer>
      </S.ContactsModalContainer>
    </Modal>
  );
};

export default ContactsModal;
