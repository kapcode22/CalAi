import React from "react";
import { Routes, Route  } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Payment from "./components/Payment";
import Header from "./components/Header";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {

  return (
    <UserAuthContextProvider>
      <Header/>
      <Routes>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route exact path="/" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
