import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./BugId.module.css";

function BugId() {

const [counter, setCounter] = useState(1);


return  (

<div className={styles["mainContain"]}>
    <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
                Was the bug above or below water?

        </div>
    </div>

    <div className={styles["centerContain"]}>
        <div className={styles["centerHeader"]}>
            <div className={styles["centerHeader2"]}>
                <button className={styles["navMenu"]}>
                
                        BUG ID PAGE
                
                </button>
            </div>
        </div>
        <div className={styles["centerHeader"]}>
            <div className={styles["centerHeader2"]}>
                <button className={styles["navMenu"]}>
                
                        BUG ID PAGE
                
                </button>
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

export default BugId;