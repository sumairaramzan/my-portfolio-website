import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const PayPalButton = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/paypal/create-payment", {
        amount: "10.00",
      });
      return response.data.approval_url;
    } catch (err) {
      console.error("Error creating order", err);
    }
  };

  const onApprove = async (data) => {
    try {
      await axios.get(`http://127.0.0.1:8000/api/paypal/success?paymentId=${data.paymentID}&PayerID=${data.payerID}`);
      setPaidFor(true);
    } catch (err) {
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
      {paidFor ? (
        <h2 className="text-success">Payment successful! 🎉</h2>
      ) : (
        <>
          <h3>Complete your payment:</h3>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={(err) => setError("Payment failed. Try again.")}
          />
        </>
      )}
      {error && <p className="text-danger">{error}</p>}
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
