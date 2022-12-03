import { createContext, useContext, useReducer } from "react";

const initialState = {
  currentScreen: "REGISTER",
  setCurrentScreen: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SCREEN":
      return { ...state, currentScreen: action.payload };
    default:
      return { ...state };
  }
};

export const AppContext = createContext(initialState);

function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.setCurrentScreen = (data) => {
    dispatch({ type: "SET_CURRENT_SCREEN", payload: data });
  };

  let data = { ...state };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
