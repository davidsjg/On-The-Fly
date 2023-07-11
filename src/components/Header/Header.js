import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {

return  (

<div className={styles["mainContain"]}>
    <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
          
                <Link
                to="/bugId"
                className={styles['spanStyle']} 
                >
                <span style={{ marginRight: -9 }}>Bug Identifier!</span>
                </Link>
       
        </div>
    </div>

    <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
            <div className={styles["navMenu"]}>
            
                    <Link to="/" style={{ color: "darkgreen", textDecoration: "none" }}>
                        <span style={{ fontSize: "larger" }}>
                        On The Fly!
                        </span>
                    </Link>
               
            </div>
        </div>
    </div>

    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
                <Link
                to="/createFly"
                className={styles['spanStyle']} 
                >
                <span>Create Fly</span>
                </Link>
       
        </div>
    </div>
</div>
);
}

export default Header;