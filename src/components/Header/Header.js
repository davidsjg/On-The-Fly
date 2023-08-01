import React, {useEffect, useState, useSearchParams} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {

    const location = useLocation()
    const curUrl = location.pathname;
    let result = curUrl.replace(/\/bugDetail\//i, "");
    console.log(result);

    let urlNum = Number(result);



    const navigate = useNavigate();

    const [goHome, setGoHome] = useState();

    useEffect(() => {
            //    window.location.reload(false); 

    }, [goHome]);


    function pageReload() {
       // setGoHome(!goHome);
       if(result !== '/'){
            navigate('/');
       } else {
        window.location.reload(false); 
       }
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