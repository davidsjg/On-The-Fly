import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./BugDetail.module.css";

function BugDetail() {

return  (

<div className={styles["mainContain"]}>
    <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
          

       
        </div>
    </div>

    <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
            <div className={styles["navMenu"]}>
            
            BUG DETAIL PAGE

            </div>
        </div>
    </div>

    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
                <Link
                to="/"
                className={styles['spanStyle']} 
                >
                <span>Home</span>
                </Link>
       
        </div>
    </div>
</div>
);
}

export default BugDetail;