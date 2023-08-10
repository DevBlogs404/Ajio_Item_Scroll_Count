import { useReducer } from "react";
import "./App.css";
import Home from "./pages/Home";
import { initialState, reducer, UserContext } from './context/context'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={
      { state, dispatch }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
