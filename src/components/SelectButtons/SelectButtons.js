import React, { useEffect, useState } from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet, useParams } from "react-router-dom";

function SelectButtons() {
  const currParam = useParams();
  let currUrl = window.location.pathname;

  const [uploadHike, setUploadHike] = useState(false);
  const [explore, setExplore] = useState(false);
  const [myHikes, setMyHikes] = useState(false);

  const [urlChange, setUrlChange] = useState(false);

  const uploadHikeSelected = "";
  const exploreSelected = "";
  const myHikesSelected = !myHikes ? styles.myHikesOut : "";

  useEffect(() => {
    if (currUrl === "/bugId") {
      setUploadHike(true);
      setExplore(false);
      setMyHikes(false);
    } else if (currUrl === "/") {
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

  return (
    <>
      <MainContain cName={styles["mainContain"]}>
        <div className={styles["allButtons"]} onClick={updateUrl}>
          {uploadHike ? (
            <div className={`${styles.selectButton2} `}>
              <p>Bug Identifier</p>
            </div>
          ) : (
            <Link to="/bugId">
              <div className={`${styles.selectButton}`}>
                <p>Bug Identifier</p>
              </div>
            </Link>
          )}
          {explore ? (
            <div className={`${styles.selectButton2} `}>
              <p>Explore Bugs</p>
            </div>
          ) : (
            <Link to="/">
              <div className={`${styles.selectButton}`}>
                <p>Explore Bugs</p>
              </div>
            </Link>
          )}
          {myHikes ? (
            <div className={`${styles.selectButton2} `}>
              <p>Create Fly</p>
            </div>
          ) : (
            <Link to="/createFly">
              <div className={`${styles.selectButton}`}>
                <p>Create Fly</p>
              </div>
            </Link>
          )}
        </div>
      </MainContain>
    </>
  );
}

export default SelectButtons;
