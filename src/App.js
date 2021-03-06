import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Router />
   </BrowserRouter>
    </>
  );
};

export default App;
