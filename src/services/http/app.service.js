import { HttpClient } from "../../utils/constants/httpClient";

let httpClient = new HttpClient();

export const getUserStatus = async (address) => {
  const response = await httpClient.post("/api/user/status", {
    walletAddress: address,
  });
  return response;
};

export const sendOtp = async (phoneNumber) => {
  const response = await httpClient.post("/api/user/send_otp", {
    phoneNumber: phoneNumber,
  });
  return response;
};

export const verifyOtp = async (phoneNumber, code, address) => {
  const response = await httpClient.post("/api/user/send_verify", {
    phoneNumber: phoneNumber,
    code: code,
    walletAddress: address,
  });
  return response;
};

export const checkIsRegistered = async (phoneNumber) => {
  const response = await httpClient.post("/api/user/isRegister", {
    phoneNumber: phoneNumber,
  });
  return response;
};

export const createTransaction = async (data) => {
  const response = await httpClient.post(
    "/api/paymentGateway/createTransaction",
    data
  );
  return response;
};
