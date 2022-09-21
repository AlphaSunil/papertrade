import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const Crypto = createContext();
const CryptoContext = (props) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "INR") setSymbol("₹");
  }, [currency]);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [SignUpModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginInModal] = useState(false);
  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setCurrency,
        numberWithCommas,
        setLoginInModal,
        setSignUpModal,
        loginModal,
        SignUpModal,
      }}
    >
      {props.children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
