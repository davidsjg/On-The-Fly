import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import CreateFly from "./components/CreateFly/CreateFly";
import HomePage from "./components/HomePage/HomePage";
import BugId from "./components/BugId/BugId";
import BugDetail from "./components/BugDetail/BugDetail";
import Header from "./components/Header/Header"


function App() {
return (
  <div className="container-fluid">
    <Header/>
    <Routes>
      <Route path="/" exact Component={HomePage}/>
      <Route path="/createFly" Component={CreateFly}/>
      <Route path="/bugId" Component={BugId}/>
      <Route path="/bugDetail/:bugId" Component={BugDetail}/>
    </Routes>
  </div>
)
}

export default App;