import "./App.css";

import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import CoinPage from "./Components/CoinPage";

function App() {
  console.log(process.env);
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
