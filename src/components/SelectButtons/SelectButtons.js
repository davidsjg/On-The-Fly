import React, { useEffect, useState } from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet, useParams } from "react-router-dom";

function SelectButtons() {
  const currParam = useParams();
  const currUrl = window.location.pathname;

  const [uploadHike, setUploadHike] = useState(false);
  const [explore, setExplore] = useState(false);
  const [myHikes, setMyHikes] = useState(false);

  const uploadHikeSelected = "";
  const exploreSelected = "";
  const myHikesSelected = !myHikes ? styles.myHikesOut : "";

  useEffect(() => {
    if (currUrl === "/uploadHike") {
      setUploadHike(true);
      setExplore(false);
      setMyHikes(false);
    } else if (currUrl === "/explore") {
      setUploadHike(false);
      setExplore(true);
      setMyHikes(false);
    } else if (currUrl === "/myHikes") {
      setUploadHike(false);
      setExplore(false);
      setMyHikes(true);
    } else {
      setUploadHike(false);
      setExplore(false);
      setMyHikes(false);
    }
  }, [currUrl]);

  return (
    <>
      <MainContain cName={styles["mainContain"]}>
        <div className={styles["allButtons"]}>
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
              <p></p>
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
