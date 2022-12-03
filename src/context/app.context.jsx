import { createContext, useContext, useReducer } from "react";

const initialState = {
  activeStep: 4,
  setActiveStep: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_STEP":
      return { ...state, activeStep: action.payload };
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

  let data = { ...state };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
