import React from "react";
import { AppRoutes } from "./routes";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(setUser(JSON.parse(localStorage.getItem("authData"))));
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
