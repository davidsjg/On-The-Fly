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
//const [above, setAbove] = useState(false);

//const butt1 = false;
let myCount = 0;
let above = false;
let outToSide = false;
let overBack = false;
let flat = false;
let tented = false;
let upright = false;


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
    setFlies(fliesFromAPI);
  }

  function updateCounter(e){
    if(e === 'but1'){
        butt1();
    } else if (e === 'but2') {
        butt2();
    } else {
        butt3();
    }
  }

  function butt1(){
    if(counter === 0){
        above = true;
        console.log('above');
        setCounter(1);
    }
    if(counter === 1){
        outToSide = true;
        console.log('out to side')
        setCounter(100)   //end
    }
    if(counter === 2){
        flat = true;
        console.log('out to side')
        setCounter(100)   //end
    }
    

    //updateCount();
  }

  function butt2(){
    if(counter === 0){
        //indicates bug is below surface
        above = false;
        setCounter(1);
        console.log(above);
    }
    if(counter === 1){
        overBack = true;
        console.log('over back')
        setCounter(2)   //end
    }
    if(counter === 2){
        tented = true;
        console.log('tented')
        setCounter(100)   //end
    }

  }

  function butt3(){
    if(counter === 2){
        console.log('inside butt3');
        console.log('upright');
        upright = true;
        setCounter(100);
        console.log(above);
    }
  }

  //if bugsArray state = 100, show all the flies with imitates != null


return  (

<div className={styles["mainContain"]}>

    {}


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
    {counter === 3 &&
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
        {counter === 0 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Above
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                Below      
            </button>
        </>
        }
        {counter === 1 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Out to Side
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                Over Back      
            </button>
        </>
        }
        {counter === 2 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Flat over back
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                Tented over back    
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but3')}>  
                Upright (sailboat)
            </button>
        </>
        }

    </div>

    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
       
        </div>
    </div>
</div>
);
}

export default BugId;