import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {

return  (

<div className={styles["mainContain"]}>
    {/* <div className={styles["leftHeader"]}>
        <div className={styles["leftLink"]}>
          
                <Link
                to="/bugId"
                className={styles['spanStyle']} 
                >
                <span style={{ marginRight: -9 }}>Bug Identifier!</span>
                </Link>
       
        </div>
    </div> */}

    <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
            <div className={styles["navMenu"]}>
            
                    <Link to="/" >
                        {/* <span className={styles['otf']}>
                            <h1 className={styles['otf']} >
                                On The Fly!
                            </h1>
                        </span> */}
                        <img src='https://i.imgur.com/VZ8RA0o.png' className={styles['otfImage']}>
                            </img> 
                    </Link>
               
            </div>
        </div>
    </div>
{/* 
    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
                <Link
                to="/createFly"
                className={styles['spanStyle']} 
                >
                <span>Create Fly</span>
                </Link>
       
        </div>
    </div> */}
</div>
);
}

export default Header;