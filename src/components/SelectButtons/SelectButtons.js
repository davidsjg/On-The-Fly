import React, { useEffect, useState } from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet, useParams } from "react-router-dom";
import WrapComp from "../WrapComp/WrapComp";
import WrapComp2 from "../WrapComp2/WrapComp2";

function SelectButtons() {
  const currParam = useParams();
  let currUrl = window.location.pathname;

  const [uploadHike, setUploadHike] = useState(false);
  const [explore, setExplore] = useState(false);
  const [myHikes, setMyHikes] = useState(false);
  const [reload, setReload] = useState();

  const [urlChange, setUrlChange] = useState(false);

  const uploadHikeSelected = "";
  const exploreSelected = "";
  const myHikesSelected = !myHikes ? styles.myHikesOut : "";

  useEffect(() => {
    if (currUrl === "/") {
      setUploadHike(true);
      setExplore(false);
      setMyHikes(false);
    } else if (currUrl === "/bugs") {
      setUploadHike(false);
      setExplore(true);
      setMyHikes(false);
    } else if (currUrl === "/createFly") {
      setUploadHike(false);
      setExplore(false);
      setMyHikes(true);
    } else {
      setUploadHike(false);
      setExplore(false);
      setMyHikes(false);
    }
  }, [urlChange]);


  function updateUrl(){
    currUrl = window.location.pathname;
    setUrlChange(true);
    if(urlChange === true){
      setUrlChange(false);
    } else {
      setUrlChange(true);
    }
  }

  function reloadPage(){
    // window.navigator("/");
  }

  return (
    <>
      <MainContain cName={styles["mainContain"]}>
        <div className={styles["allButtons"]} onClick={updateUrl}>
        {/* {explore ? (
            <WrapComp buttonText={'Explore Bugs'}/>

          ) : (
            <Link to="/bugs">
              <WrapComp2 buttonText={'Explore Bugs'}/>

            </Link>
          )} */}
          {/* {uploadHike ? (
            <WrapComp buttonText={'Bug Identifier'}/>
          ) : (
            <Link to="/" onClick={reloadPage}>
              <WrapComp2 buttonText={'Bug Identifier'}/>
            </Link>
          )} */}
          {/* {myHikes ? (
              <WrapComp buttonText={'Create Fly'}/>
          ) : (
            <Link to="/createFly">
              <WrapComp2 buttonText={'Create Fly'}/>
            </Link>
          )} */}
        </div>
      </MainContain>
    </>
  );
}

export default SelectButtons;
