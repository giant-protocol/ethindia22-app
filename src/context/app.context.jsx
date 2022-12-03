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
  setActiveStep: () => {},
  setShowContactsModal: () => {},
  setShowTokensModal: () => {},
  setShowApproveModal: () => {},
  setApproveModalType: () => {},
  setIsRegistered: () => {},
  setWalletLoading: () => {},
  setUserData: () => {},
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

  let data = { ...state };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
