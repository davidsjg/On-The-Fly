import React, { useEffect, useState } from 'react';
import styles from "./BugDetail.module.css";
import { useLocation, Link } from "react-router-dom";
import { listNotes } from '../../graphql/queries';
import { API, Storage } from 'aws-amplify';
import {
    Image,
    Card
  } from '@aws-amplify/ui-react';
import styled from "styled-components";


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

        console.log(theFlies[0].name);
        finalFly && console.log(finalFly[0].imitates)

        const myFlies = theFlies.filter((myFly) => myFly.imitates === finalFly[0].name);

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
            <br/>
    

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

    <Link to='/' style={{ textDecoration: 'none' }}>
    <Wrap>
        <p>
        Find Another Bug!
        </p>

    </Wrap>
    {/* <button className={styles["findAnother"]} oncli>
        Find Another Bug!
    </button> */}
    </Link>
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

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 250px; */
  margin: 30px 50px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 12%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  width: 350px;
  height: 150px;
  background-color:  #5cb9ff;


  p {
    font-weight: 300;
    padding: 0 20px;
    color: white;
    background-size: contain;
    border-radius: 2px;
    text-decoration: none;
    font-size:xx-large;
  }

  &:hover {
    transform: scale(1.05);
    p {
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;