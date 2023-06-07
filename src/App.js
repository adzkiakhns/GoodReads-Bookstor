import React, {Fragment} from "react";
import './App.css';

//components

import InputBook from "./components/InputBook";
import ListBooks from "./components/ListBook";

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputBook />
      <ListBooks />
    </div>
  </Fragment>
  )
}

export default App;
