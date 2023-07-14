import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Bugs.module.css";

function Bugs() {

return  (

<div className={styles["mainContain"]}>
    <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
          
      
        </div>
    </div>

    <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
            <div className={styles["navMenu"]}>
            
                Welcome to On The Fly!
               
            </div>
        </div>
    </div>

    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
        
        </div>
    </div>
</div>
);
}

export default Bugs;