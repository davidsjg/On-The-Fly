import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from "./BugId.module.css";
import { API, Storage } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';

function BugId() {

const [counter, setCounter] = useState(0);
const [flies, setFlies] = useState();
const [button1, setButton1] = useState(false);
const [button2, setButton2] = useState(false);

useEffect(() => {
    fetchFlies();
  }, []);

const questions = ['Was the bug above or below water?', 'are you furreal?'];

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
    setFlies(fliesFromAPI);
  }

  function updateCounter(e){
    console.log(e);
    setButton1(true);
    if(counter === 0){
        
    }


    if(counter + 1 > questions.length){
        setCounter(100);
    }
  }



return  (

<div className={styles["mainContain"]}>
    {counter === 0 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    Was the bug above or below water?
            </div>
        </div>
    }
    {counter === 1 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    What direction do the wings go?
            </div>
        </div>
    }
    {counter === 2 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    How do the wings lay?
            </div>
        </div>
    }
    {counter === 100 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    End
            </div>
        </div>
    }


    <div className={styles["centerContain"]}>
        <div className={styles["centerHeader"]}>
            <div className={styles["centerHeader2"]}>
                <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>
                
                        BUG ID PAGE
                
                </button>
            </div>
        </div>
        <div className={styles["centerHeader"]}>
            <div className={styles["centerHeader2"]}>
                <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                
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