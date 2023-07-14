import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./BugDetail.module.css";
import { useLocation } from "react-router-dom";
import { listNotes } from '../../graphql/queries';
import { API, Storage } from 'aws-amplify';
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    Card
  } from '@aws-amplify/ui-react';


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

        const finalFly = fliesFromAPI.filter((fly) => fly.id === result)
        setFly(finalFly[0]);
      }

return  (

<div className={styles["mainContain"]}>

    <div className={styles["topHeader"]}>
        <div className={styles["navMenu"]}>
            {fly &&
                <>{fly.name}</>
            }
        </div>
    </div>
    <div className={styles["middleHeader"]}>
        <div className={styles["navMenu"]}>
            {fly &&
                <>{fly.name}</>
            }
        </div>
    </div>
    <div className={styles["helloContain"]}>
        <div className={styles["navMenu"]}>
            {/* {fly &&
                <>{fly.name}</>
            } */}
            sup
        </div>
    </div>
    <div className={styles["dataContain"]}>
        <div className={styles["flyImage"]}>
            <View margin="3rem 0" className={styles["finalView"]} >
                {fly && 
                        <Card className={styles["flyCardFinal"]} >
                            {fly.image && (
                                <Image
                                    src={fly.image}
                                    alt={`visual aid for ${fly.name}`}
                                    className={styles["finalImg"]}
                                />       
                            )}
                        </Card>
                }
            </View>
        </div>
        <div className={styles["flyImage"]}>
            <View margin="3rem 0" className={styles["finalView"]} >
                {fly && 
                        <Card className={styles["flyCardFinal"]} >
                            {fly.category}
                        </Card>
                }
            </View>
        </div>
    </div>

</div>
);
}

export default BugDetail;