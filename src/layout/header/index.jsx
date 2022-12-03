import React from "react";
import { S } from "./styles";
import MetamaskIcon from "../../assets/icons/MetamaskIcon.svg";
import { metaMask } from "../../connectors/Metamask";
import { handleConnect } from "../../utils/index";
import { useWeb3React } from "@web3-react/core";
import { Box } from "@mui/system";
import MainLogo from "../../assets/MainLogo.svg";
import PushProtocolIcon from "../../assets/PushProtocolIcon.svg";
import { NAV_ITEMS } from "../../utils/constants";

const Header = () => {
  const { account } = useWeb3React();
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer>
          <img src={MainLogo} alt="" />
        </S.LogoContainer>

        <S.Nav>
          {NAV_ITEMS.map((nav) => {
            return (
              <S.CustomLink
                to={nav.route}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #00C853" : "",
                  };
                }}
              >
                {nav.label}
              </S.CustomLink>
            );
          })}
        </S.Nav>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1rem",
            width: "80rem",
          }}
        >
          {account && (
            <>
              {true ? (
                <S.PushProtocolButton
                  id="sdk-trigger-id"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={PushProtocolIcon} alt="" />
                </S.PushProtocolButton>
              ) : (
                <S.PushProtocolUnSubButton
                  id="unsubscribed"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  // onClick={() => handleNotification()}
                >
                  <img src={PushProtocolIcon} alt="" />
                </S.PushProtocolUnSubButton>
              )}
            </>
          )}
          <S.WalletWrapperContainer sx={{ background: "#9369bf40 !important" }}>
            Polygon Testnet
          </S.WalletWrapperContainer>
          {!account ? (
            <S.WalletWrapperContainer onClick={handleConnect}>
              <img src={MetamaskIcon} alt="walletLogo" />
              Connect Metamask
            </S.WalletWrapperContainer>
          ) : (
            <S.BalanceContainer
              onClick={() => {
                localStorage.setItem("isConnected", false);
                metaMask.resetState();
              }}
            >
              <S.WalletWrapperContainer
                sx={{
                  fontWeight: 400,
                  color: "#66717B",
                  fontSize: "1.125rem",
                }}
                className="animate__animated animate__fadeInLeft"
              >
                <img src={MetamaskIcon} alt="walletLogo" />
                {account?.substring(0, 6)}...
                {account?.substring(account.length - 4)}
              </S.WalletWrapperContainer>
            </S.BalanceContainer>
          )}
        </Box>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
