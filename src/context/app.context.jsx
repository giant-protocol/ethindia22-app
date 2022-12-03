import { createContext, useContext, useReducer } from "react";

const initialState = {
  activeStep: 0,
  showContactsModal: false,
  showTokensModal: false,
  showApproveModal: false,
  approveModalType: "approve",
  setActiveStep: () => {},
  setShowContactsModal: () => {},
  setShowTokensModal: () => {},
  setShowApproveModal: () => {},
  setApproveModalType: () => {},
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

  let data = { ...state };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
