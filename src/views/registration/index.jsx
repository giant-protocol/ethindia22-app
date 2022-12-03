import { useWeb3React } from "@web3-react/core";
import React from "react";
import MainCard from "../../components/maincard";
import Register from "./register";
import NotConnected from "./notconnected";
import { S } from "./style";
import { CircularProgress } from "@mui/material";
import { useAppContext } from "../../context/app.context";
import { Box } from "@mui/system";

const Registration = () => {
  const { account } = useWeb3React();
  const { walletLoading } = useAppContext();

  return (
    <>
      {!walletLoading ? (
        <>
          {account ? (
            <S.HomeWrapper>
              <MainCard>
                <Register />
              </MainCard>
            </S.HomeWrapper>
          ) : (
            <NotConnected />
          )}
        </>
      ) : (
        <Box sx={{ height: "100vh", display: "grid", placeContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Registration;
