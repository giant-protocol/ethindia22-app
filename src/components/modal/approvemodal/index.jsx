import { Modal } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../context/app.context";
import CloseIcon from "../../../assets/icons/CloseIcon.svg";
import AlertIcon from "../../../assets/icons/AlertIcon.svg";
import IdeaIcon from "../../../assets/icons/Idea.svg";
import ChainLink from "../../../assets/icons/ChainLink.png";

import { S } from "./style";
import { Box } from "@mui/system";
import ethindiaContractService from "../../../ethereum/contract/ethindiaContractService";
import { createTransaction } from "../../../services/http/app.service";
import { useNavigate } from "react-router-dom";

const ApproveModal = () => {
  const navigate = useNavigate();

  const {
    showApproveModal,
    setShowApproveModal,
    approveModalType,
    selectedChaindata,
    userCurrencyvalue,
    addressOfTheReceiver,
    receiverRegisterd,
    escrowSenderId,
    userData,
    idOfTheReceiver,
  } = useAppContext();

  const handleClose = () => {
    setShowApproveModal(false);
  };

  const handleApprove = () => {
    ethindiaContractService.Approve().then((res) => {
      if (receiverRegisterd) {
        ethindiaContractService
          .sendTokenToWallet(addressOfTheReceiver, userCurrencyvalue)
          .then((tx) => {
            createTransaction({
              from: userData?.user?.userId,
              type: "sent",
              status: "success",
              txHash: tx?.hash,
              to: idOfTheReceiver,
              cryptoSymbol: "LINK",
              amount: userCurrencyvalue,
              isSendToDPN: true,
              isEscrow: false,
              isToken: true,
            }).then((res) => navigate("/transactions"));
          });
      } else {
        ethindiaContractService
          .sendTokenToEscrow(
            userData?.user?.userId,
            escrowSenderId,
            userCurrencyvalue
          )
          .then((tx) => {
            createTransaction({
              from: userData?.user?.userId,
              type: "sent",
              status: "success",
              txHash: tx?.hash,
              to: idOfTheReceiver,
              cryptoSymbol: "LINK",
              amount: userCurrencyvalue,
              isSendToDPN: false,
              isEscrow: true,
              isToken: true,
            }).then((res) => navigate("/transactions"));
          });
      }
    });
  };

  return (
    <Modal
      open={showApproveModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ApproveModalContainer>
        <S.ApproveModalHeader>
          {approveModalType === "approve"
            ? `Approve ${selectedChaindata?.contract_name}`
            : "Send money "}
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
        </S.ApproveModalHeader>
        {approveModalType === "approve" && (
          <S.ApproveModalBody sx={{ padding: "1rem 0" }}>
            <img src={ChainLink} alt="" />
            <S.ApproveText>
              Please approve PESA in <br />
              {selectedChaindata?.contract_name} for transactions.{" "}
              <S.LearnMoreText>Learn more</S.LearnMoreText>
            </S.ApproveText>
            <S.ApproveBtn onClick={() => handleApprove()}>Approve</S.ApproveBtn>
          </S.ApproveModalBody>
        )}

        {approveModalType === "sendMoneyWarning" && (
          <S.ApproveModalBody>
            <Box
              sx={{
                display: "Flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img src={AlertIcon} alt="" />
              <S.NumberText
                sx={{
                  fontSize: "1.3rem !important",
                  fontWeight: "500 !important",
                }}
              >
                {userData?.user?.phoneNumber}
              </S.NumberText>
            </Box>
            <Box sx={{ display: "flex", padding: "0 1rem", gap: "1rem" }}>
              <img src={IdeaIcon} alt="" />
              <S.ApproveText sx={{ textAlign: "justify !important" }}>
                This number is not registered, the amount will be in escrow for
                7 days. You can reclaim the amount from escrow if it is not
                claimed by the receiver within 7 days.{" "}
                <S.LearnMoreText>Learn more</S.LearnMoreText>
              </S.ApproveText>
            </Box>
            <S.ApproveBtn>Proceed</S.ApproveBtn>
          </S.ApproveModalBody>
        )}
      </S.ApproveModalContainer>
    </Modal>
  );
};

export default ApproveModal;
