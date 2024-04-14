import React, { useEffect, useState } from "react";
import { useHistory ,Redirect} from "react-router-dom";
import { auth } from "../firebase";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { useUserAuth } from "../context/UserAuthContext";
import { Navigate } from "react-router-dom";
const stripePromise = loadStripe("pk_test_51O3juaSFUzG000TSlpVlPO1QSykakaeTkfxpdn2Hfsu9BPO0zhA7W7tIWRKVt6xzOIWx7MMzb3Cedxh4S1KBELsn00NAGy31cm");

const Payment = () => {
  const { currentUser } = useUserAuth();
  let x;
  if(currentUser)
  {
    x=(<Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>);

  }
  else {
    x= (<Navigate to="/signin" />);
  }
  return (

    x
  );
};

export default Payment;
