import React, { useContext, useState } from 'react';
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CardSection from './CardSection';
import { useUserAuth } from '../context/UserAuthContext';
import c1 from "../images/70897-online-payments-1.gif";

const CheckoutForm = ({ stripe, elements }) => {
    const { currentUser, logOut } = useUserAuth();
    const [paymentDone, setPaymentDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
            const paymentAmount = event.target.paymentAmount.value;

            // Create the payment object
            const paymentData = {
                token: result.token.id,
                amount: paymentAmount,
                timestamp: new Date().toISOString()
            };

            // Send the payment data to Firebase Realtime Database
            const res = await fetch('https://calai-40842-default-rtdb.firebaseio.com/Payment.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to store payment data');
                    }
                    // Optionally, you can redirect or show a success message here
                    setPaymentDone(true);
                    setErrorMessage(null);
                })
                .catch(error => {
                    console.error('Error storing payment data:', error);
                    // Handle error state here
                    setErrorMessage('Failed to store payment data');
                    setPaymentDone(false);
                });
        }
    };

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error("Error logging out:", error);
            // Handle error if needed
        }
    };

    return (
        <section className='bg-gray-300 min-h-screen flex items-center justify-center'>
            <div className='bg-[#bad4f9] flex rounded-2xl shadow-lg p-5'>
                <div className='sm:w-1/2 px-16'>
                    <h2 className='text-4xl font-bold '> Payment </h2>
                    <p className="font-medium text-lg text-gray-500 mt-4">Dear {currentUser && currentUser.email} Please enter your Card details</p>
                    {paymentDone ? (
                        <div className="text-green-600 text-lg font-bold mb-4">
                            Payment Done Successfully!
                        </div>
                    ) : null}
                    {errorMessage && (
                        <div className="text-red-600 text-lg font-bold mb-4">
                            {errorMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <CardSection />
                        <div className="flex justify-center">
                            <button disabled={!stripe} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Pay Now</button>
                        </div>
                    </form>
                    <div className="flex justify-center" >
                        <a href="/" onClick={handleLogOut} className="block w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-voilet-600 focus:outline-none focus:ring focus:border-blue-300 mt-4 text-center">
                            Log out
                        </a>
                    </div>
                </div>
                <div className='sm:block hidden w-1/2 '>
                    <img className='h-full w-full object-fit:cover rounded-2xl' src={c1} alt='...'></img>
                </div>
            </div>
        </section>
    );
}

const PaymentForm = () => {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}

export default PaymentForm;
