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

  const [urlChange, setUrlChange] = useState(false);

  const uploadHikeSelected = "";
  const exploreSelected = "";
  const myHikesSelected = !myHikes ? styles.myHikesOut : "";

  useEffect(() => {
    if (currUrl === "/") {
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
        {explore ? (
            // <div className={`${styles.selectButton2} `}>
            //   <p>Explore Bugs</p>
            // </div>
            <WrapComp buttonText={'Explore Bugs'}/>

          ) : (
            <Link to="/bugs">
              {/* <div className={`${styles.selectButton}`}>
                <p>Explore Bugs</p>
              </div> */}
              <WrapComp2 buttonText={'Explore Bugs'}/>

            </Link>
          )}
          {uploadHike ? (
            // <div className={`${styles.selectButton2} `}>
            //   <p>Bug Identifier</p>
            // </div>
            <WrapComp buttonText={'Bug Identifier'}/>
          ) : (
            // <Link to="/bugId">
            //   <div className={`${styles.selectButton}`}>
            //     <p>Bug Identifier</p>
            //   </div>
            // </Link>
            <Link to="/">
              {/* <WrapComp buttonText={'Bug Identifier'}/> */}
              <WrapComp2 buttonText={'Bug Identifier'}/>
            </Link>


          )}
          {myHikes ? (
            // <div className={`${styles.selectButton2} `}>
            //   <p>Create Fly</p>
            // </div>
              <WrapComp buttonText={'Create Fly'}/>

          ) : (
            <Link to="/createFly">
              {/* <div className={`${styles.selectButton}`}>
                <p>Create Fly</p>
              </div> */}
              <WrapComp2 buttonText={'Create Fly'}/>

            </Link>
          )}
        </div>
      </MainContain>
    </>
  );
}

export default SelectButtons;
