import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./BugDetail.module.css";
import { useLocation } from "react-router-dom";
import { listNotes } from '../../graphql/queries';
import { API, Storage } from 'aws-amplify';


function BugDetail() {
    const [fly, setFly] = useState();
    const location = useLocation()
    const curUrl = location.pathname;
    let result = curUrl.replace(/\/bugDetail\//i, "");

    console.log(result);

    useEffect(() => {
        fetchFlies();
    }, []);
    
    async function fetchFlies() {
        const apiData = await API.graphql({ query: listNotes });
        const fliesFromAPI = apiData.data.listNotes.items;
        await Promise.all(
          fliesFromAPI.map(async (note) => {
            if (note.image) {
              const url = await Storage.get(note.name);
              note.image = url;
            }
            return note;
          })
        );

        console.log(fliesFromAPI)

        const finalFly = fliesFromAPI.filter((fly) => fly.id === result)

        // fliesFromAPI.map((fly) => {
        //     console.log(fly.id);
        //     if(fly.Id === result){
        //         console.log('they equal')
        //     }
        // })

        console.log(finalFly[0]);

        setFly(finalFly[0]);
      }

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

            {fly &&
                <>{fly.name}</>

            }

            </div>
        </div>
    </div>

    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
                {/* <Link
                to="/"
                className={styles['spanStyle']} 
                >
                <span>Home</span>
                </Link> */}
       
        </div>
    </div>
</div>
);
}

export default BugDetail;