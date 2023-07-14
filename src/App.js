import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import CreateFly from "./components/CreateFly/CreateFly";
import BugId from "./components/BugId/BugId";
import BugDetail from "./components/BugDetail/BugDetail";
import Header from "./components/Header/Header"
import SelectButtons from "./components/SelectButtons/SelectButtons";
import styles from "./App.module.css";
import Bugs from "./components/Bugs/Bugs";

function App() {
return (
  <div className={styles["appContain"]}>
    <Header/>
    <SelectButtons/>
    <Routes>
      <Route path="/bugs" exact Component={Bugs}/>
      <Route path="/createFly" Component={CreateFly}/>
      <Route path="/" Component={BugId}/>
      <Route path="/bugDetail/:bugId" Component={BugDetail}/>
    </Routes>
  </div>
)
}

export default App;