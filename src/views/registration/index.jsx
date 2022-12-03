import { useWeb3React } from "@web3-react/core";
import React from "react";
import MainCard from "../../components/maincard";
import Register from "./register";
import NotConnected from "./notconnected";
import { S } from "./style";

const Registration = () => {
  const { account } = useWeb3React();

  return (
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
  );
};

export default Registration;
