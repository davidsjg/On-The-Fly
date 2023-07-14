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
    const [finalFly, setFinalFly] = useState();
    const [otherFlies, setOtherFlies] = useState();
    const [finalWing, setFinalWing] = useState();
    const [finalWingDesc, setFinalWingDesc] = useState();
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
        console.log(finalFly);
        setFinalFly(finalFly[0]);

        const theFlies = fliesFromAPI.filter((fly) => fly.imitates !== "")
        console.log(theFlies);

        const myFlies = theFlies.filter((myFly) => myFly.category === finalFly[0].category);

        console.log(myFlies)

        // console.log(myFlies);

        setOtherFlies(myFlies);


        if(finalFly[0].wingsOut === true ){
            setFinalWing('True');
        }

        if(finalFly[0].wingsDesc === null){
            setFinalWingDesc('n/a')
        }




      }

return  (

<div className={styles["mainContain"]}>

    {/* <div className={styles["finalView"]}>
    </div> */}

    <div className={styles["dataContain"]}>
        <div className={styles["dataContain2"]}>
            <div className={styles["fliesToUse"]} >
                            Selected Fly
            </div>
            <Card className={styles["flyCardFinal"]} >
                <div className={styles["leftData"]}>
                    {finalFly && (
                        <Image
                            src={finalFly.image}
                            alt={`visual aid for ${finalFly && finalFly.name}`}
                            className={styles["finalBugImg"]}
                        />       
                    )}
                </div>
                <div className={styles["rightData"]}>
                    <div as="strong" fontWeight={700} >
                        {finalFly && finalFly.name}
                    </div>
                    <div as="strong" fontWeight={700} >
                        Category : {finalFly && finalFly.category} 
                    </div>
                    {finalFly &&
                     finalFly.wingsDesc &&
                        // finalFly.wingsDesc &&
                        <div as="strong" fontWeight={700} >
                        Wing Orientation : {finalFly && finalFly.wingsDesc} 
                        </div>   
                    }
                    {finalWingDesc &&
                        // finalFly.wingsDesc &&
                        <div as="strong" fontWeight={700} >
                        Wing Orientation : {finalWingDesc} 
                        </div>   
                    }
                    {finalFly &&
                        <div as="strong" fontWeight={700} >
                        Wings out : {finalWing} 
                        </div>   
                    }

                </div>
            </Card>
        </div>
        <div className={styles["separator"]} >
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>
            - <br/>

        </div>
        <div className={styles["otherFlies2"]}>
            <div className={styles["fliesToUse"]} >
                    Flies to Use
            </div>
            <div className={styles["otherFlies"]}>
            {otherFlies && 
                otherFlies.map((fly) => {
                    return(
                        (
                            <>
                            <Card className={styles["flyCardFinal"]} >
                                <div className={styles["leftData"]}>
                                    <Image
                                        src={fly.image}
                                        alt={`visual aid for ${fly && fly.name}`}
                                        className={styles["finalImg"]}
                                    />       
                                    <div>
                                        Name: {fly.name}
                                    </div>
                                    <div>
                                        Category: {fly.category}
                                    </div>
                                    <div>
                                        Imitates: {fly.imitates}
                                    </div>
                                    <div>
                                        Size: {fly.size}
                                    </div>
                                </div>
                            </Card>
                        </>
                        )
                    )
                })
            }                     
            </div>
                       

        </div>
        <div>

        </div>
    </div>

            
    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
</div>
);
}

export default BugDetail;