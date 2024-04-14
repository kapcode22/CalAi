import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ element, ...rest }) => {
  const { currentUser } = useUserAuth(); // Get the current user from your user authentication context

  return (
    <Routes>
         <Route
      {...rest}
      element={currentUser ? element : <Navigate to="/signin"  />}
    />
    </Routes>
   
  );
};

export default ProtectedRoute;
