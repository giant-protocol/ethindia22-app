import { Contract } from "@ethersproject/contracts";
import ETHINDIA from "../build/ETHINDIA.json";
import ERC20 from "../build/ERC20.json";

const ethindiaContractService = () => {
  let contractInstance, deployed, contractWeb3, signer, tokenWeb3;
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const erc20Address = process.env.REACT_APP_ERC20_CONTRACT_ADDRESS;

  const setup = (_currentProvider) => {
    signer = _currentProvider.getSigner();

    contractWeb3 = new Contract(contractAddress, ETHINDIA, signer);
    tokenWeb3 = new Contract(erc20Address, ERC20, signer);
    deployed = true;
  };

  const transfer = ({ from, to, id, amount, data }) => {
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    const response = contractWeb3.safeTransferFrom(from, to, id, amount, data);

    // console.log(response, "RESPONSE");
    return response;
  };

  const sendFundToWallet = (destinationAddress, currencyValue) => {
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    const response = contractWeb3.sendFundToWallet(destinationAddress, {
      value: Math.pow(10, 18) * currencyValue,
    });

    return response;
  };

  const sendTokenToWallet = (addressOfTheReceiver, userCurrencyvalue) => {
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    const response = contractWeb3.sendTokenToWallet(
      addressOfTheReceiver,
      "0x8f008ebe12e18911dae5c06d41316b9c0f76d068",
      Math.pow(10, 18) * userCurrencyvalue
    );

    return response;
  };

  const sendFundToEscrow = (senderId, currencyValue, destinationAddress) => {
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    const response = contractWeb3.sendFundToEscorw(
      senderId,
      destinationAddress,
      {
        value: Math.pow(10, 18) * Number(currencyValue),
      }
    );

    return response;
  };

  const sendTokenToEscrow = (userData, escrowSenderId, userCurrencyvalue) => {
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    const response = contractWeb3.sendTokenToEscorw(
      userData,
      escrowSenderId,
      "0x8f008ebe12e18911dae5c06d41316b9c0f76d068",
      Math.pow(10, 18) * userCurrencyvalue
    );

    return response;
  };

  const Approve = () => {
    console.log("in finc");
    if (!deployed) {
      alert("Contract is not deployed!");
      return null;
    }

    console.log(tokenWeb3, "tokenWeb3");
    console.log(tokenWeb3, "tokenWeb3");

    const response = tokenWeb3.approve(
      process.env.REACT_APP_CONTRACT_ADDRESS,
      "115792089237316195423570985008687907853269984665640564039457584007913129639935"
    );

    return response;
  };

  return {
    setup,
    transfer,
    sendFundToWallet,
    sendFundToEscrow,
    Approve,
    sendTokenToWallet,
    sendTokenToEscrow,
  };
};

export default ethindiaContractService();
