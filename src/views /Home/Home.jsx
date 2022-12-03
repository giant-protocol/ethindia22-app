import React, { useState } from "react";
import MainCard from "../../components/maincard";
import { useAppContext } from "../../context/app.context";
import GetStarted from "./getstarted";
import Register from "./register";
import { S } from "./style";

const Home = () => {
  const { currentScreen } = useAppContext();
  console.log(currentScreen, "current screen");

  return (
    <S.HomeWrapper>
      <MainCard>
        {currentScreen === "GET_STARTED" && <GetStarted />}
        {currentScreen === "REGISTER" && <Register />}
      </MainCard>
    </S.HomeWrapper>
  );
};

export default Home;
