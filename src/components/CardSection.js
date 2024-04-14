import React from 'react';
import {
  CardElement,
} from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    
    base: {
      
      color: "blue",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        
      },
    },
    invalid: {
      color: "red",
      ":focus": {
        color: "red",
      },
    },
  },
};

const CardSection = () => {
  return (
    <>
      <div className="mb-6 mt-6">
        <label htmlFor="paymentAmount" className="block text-sm font-medium text-gray-700">
          Enter Amount
        </label>
        <input
          type="number"
          id="paymentAmount"
          name="paymentAmount"
          className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter payment amount"
        />
      </div>
      <div className="mb-5 mt-5">
        <CardElement options={CARD_ELEMENT_OPTIONS}></CardElement>
      </div>

    </>
  );
};

export default CardSection;
