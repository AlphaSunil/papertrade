import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Fragment>
      <Header />
      <Homepage />
    </Fragment>
  );
}

export default App;
