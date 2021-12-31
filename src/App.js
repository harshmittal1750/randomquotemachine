import React from "react";
import "./App.css";
import HeadLine from "./Components/HeadLine";
import "bootstrap/dist/css/bootstrap.min.css";

import CardList from "./Components/CardList";
const App = () => {
  return (
    <div>
      <HeadLine></HeadLine>

      <CardList />
    </div>
  );
};

export default App;
