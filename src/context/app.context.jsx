import { createContext, useContext, useReducer } from "react";

const initialState = {
  activeStep: 0,
  showContactsModal: false,
  showTokensModal: false,
  showApproveModal: false,
  approveModalType: "approve",
  isRegistered: false,
  walletLoading: false,
  userData: [],
  selectedChaindata: [],
  userCurrencyvalue: "",
  addressOfTheReceiver: "",
  receiverRegisterd: "",
  escrowSenderId: "",
  idOfTheReceiver: "",
  setActiveStep: () => {},
  setShowContactsModal: () => {},
  setShowTokensModal: () => {},
  setShowApproveModal: () => {},
  setApproveModalType: () => {},
  setIsRegistered: () => {},
  setWalletLoading: () => {},
  setUserData: () => {},
  setSelectedChainData: () => {},
  setUserCurrencyValue: () => {},
  setAddressOfTheReceiver: () => {},
  setReceiverRegistered: () => {},
  setEscrowSenderId: () => {},
  setIdOfTheReceiver: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_STEP":
      return { ...state, activeStep: action.payload };
    case "SET_SHOW_CONTACTS_MODAL":
      return { ...state, showContactsModal: action.payload };
    case "SET_SHOW_TOKENS_MODAL":
      return { ...state, showTokensModal: action.payload };
    case "SET_SHOW_APPROVE_MODAL":
      return { ...state, showApproveModal: action.payload };
    case "SET_APPROVE_MODAL_TYPE":
      return { ...state, approveModalType: action.payload };
    case "SET_IS_REGISTERED":
      return { ...state, isRegistered: action.payload };
    case "SET_WALLET_LOADING":
      return { ...state, walletLoading: action.payload };
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    case "SET_SELECTED_CHAIN_DATA":
      return { ...state, selectedChaindata: action.payload };
    case "SET_USER_CURRENCY_VALUE":
      return { ...state, userCurrencyvalue: action.payload };
    case "SET_ADDRESS_OF_THE_RECEIVER":
      return { ...state, addressOfTheReceiver: action.payload };
    case "SET_RECEIVER_REGISTERED":
      return { ...state, receiverRegisterd: action.payload };
    case "SET_ESCROW_SENDER_ID":
      return { ...state, escrowSenderId: action.payload };
    case "SET_ID_OF_THE_RECEIVER":
      return { ...state, idOfTheReceiver: action.payload };
    default:
      return { ...state };
  }
};

export const AppContext = createContext(initialState);

function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.setActiveStep = (data) => {
    dispatch({ type: "SET_ACTIVE_STEP", payload: data });
  };

  state.setShowContactsModal = (data) => {
    dispatch({ type: "SET_SHOW_CONTACTS_MODAL", payload: data });
  };

  state.setShowTokensModal = (data) => {
    dispatch({ type: "SET_SHOW_TOKENS_MODAL", payload: data });
  };

  state.setShowApproveModal = (data) => {
    dispatch({ type: "SET_SHOW_APPROVE_MODAL", payload: data });
  };

  state.setApproveModalType = (data) => {
    dispatch({ type: "SET_APPROVE_MODAL_TYPE", payload: data });
  };

  state.setIsRegistered = (data) => {
    dispatch({ type: "SET_IS_REGISTERED", payload: data });
  };

  state.setWalletLoading = (data) => {
    dispatch({ type: "SET_WALLET_LOADING", payload: data });
  };

  state.setUserData = (data) => {
    dispatch({ type: "SET_USER_DATA", payload: data });
  };

  state.setSelectedChainData = (data) => {
    dispatch({ type: "SET_SELECTED_CHAIN_DATA", payload: data });
  };

  state.setUserCurrencyValue = (data) => {
    dispatch({ type: "SET_USER_CURRENCY_VALUE", payload: data });
  };

  state.setAddressOfTheReceiver = (data) => {
    dispatch({ type: "SET_ADDRESS_OF_THE_RECEIVER", payload: data });
  };

  state.setReceiverRegistered = (data) => {
    dispatch({ type: "SET_RECEIVER_REGISTERED", payload: data });
  };

  state.setEscrowSenderId = (data) => {
    dispatch({ type: "SET_ESCROW_SENDER_ID", payload: data });
  };

  state.setIdOfTheReceiver = (data) => {
    dispatch({ type: "SET_ID_OF_THE_RECEIVER", payload: data });
  };

  let data = { ...state };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
