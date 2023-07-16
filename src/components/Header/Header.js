import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {

    const navigate = useNavigate();

    const [goHome, setGoHome] = useState();

    useEffect(() => {
            //    window.location.reload(false); 

    }, [goHome]);


    function pageReload() {
        setGoHome(!goHome);
        // navigate('/');
       // window.location.reload(false); 
    }

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
                        <img src='https://i.imgur.com/VZ8RA0o.png' className={styles['otfImage']} alt='fish logo' onClick={pageReload}/>
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