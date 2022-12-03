import { S } from "./style";
import coonnectEthImg from "../../../assets/ConnectEthImg.svg";
import MoneyBag from "../../../assets/MoneyBag.svg";
import { handleConnect } from "../../../utils";

const NotConnected = () => {
  return (
    <S.NotConnectedWrapper>
      <S.ConnectEthContainer>
        <img
          src={MoneyBag}
          alt="money bag"
          style={{ height: "150px", width: "150px" }}
        />
        <S.NotConnectedText>
          Send and request money globally using
          <br /> your phone number
          <br />
          .Get started by connecting your wallet
        </S.NotConnectedText>
        <S.ConnectEthBtn onClick={handleConnect}>
          Connect your ETH wallet{" "}
        </S.ConnectEthBtn>
      </S.ConnectEthContainer>
      <img
        src={coonnectEthImg}
        alt="banner img"
        style={{ height: "15rem", width: "50rem" }}
      />
    </S.NotConnectedWrapper>
  );
};

export default NotConnected;
