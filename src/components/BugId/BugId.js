import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from "./BugId.module.css";
import { API, Storage } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View
  } from '@aws-amplify/ui-react';

function BugId() {

const [counter, setCounter] = useState(0);
const [flies, setFlies] = useState();
const [button1, setButton1] = useState(false);
const [button2, setButton2] = useState(false);
const [myAbove, setMyAbove] = useState(false);
const [out2Side, setOut2Side] = useState(false);
const [flat, setFlat] = useState(false);
const [legs, setLegs] = useState(false);
const [overBack, setOverBack] = useState(false);
const [tented, setTented] = useState(false);
const [upright, setUpright] = useState(false);
const [joints, setJoints] = useState(false);
const [tail, setTail] = useState(false);
const [antennae, setAntennae] = useState(false);
const [curFlies, setCurFlies] = useState(flies)

const [flyData, setFlyData] = useState({ above: false, wingsOut : false, flat: false, overBack : false, tented : false, upright: false, legs : false, joints : false, tail : true, antennae : false  });


let myCount = 0;
let above = false;
let outToSide = false;

useEffect(() => {
    fetchFlies();
    console.log(flies);
  }, []);


useEffect(() => {
    setData();
    calcFlies();
  }, [flyData]);

function calcFlies(){
   // const newFlies = flies.filter((fly) => fly.id !== id);
    //have all the flies
    //have a fly to compare it against

    if(flyData.above === true) {
        console.log(flies);
        const newFlies = flies.filter((fly) => fly.above === false);
        console.log(newFlies);
        setFlies(newFlies);
    }
}

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

  function setData(){

     conIt(flyData);

  }

  function conIt(fly){
    console.log(fly);
  }

  function butt1(){

    switch (counter) {
        case 0:
            console.log('above');
            setFlyData({
                ...flyData,
                above : true
            })
            setCounter(1);
          break;
        case 1:
            console.log('out to side')
            setFlyData({
                ...flyData,
                wingsOut : true
            })
            setCounter(100)   //end
          break;
        case 2:
            console.log('flat')
            setFlyData({
                ...flyData,
                flat : true
            })
            setCounter(100)   //end
            setData();
          break;
        case 3:
            console.log('has legs')
            setFlyData({
                ...flyData,
                legs : true
            })
            setCounter(4)   //end
          break;
        case 4:
            console.log('has joints')
            setFlyData({
                ...flyData,
                joints : true
            })
            setCounter(5)   //end
          break;
        case 5:
            console.log('has tail')
            setFlyData({
                ...flyData,
                tail : true
            })
            setCounter(6)   //end
          break;
        case 6:
            console.log('has antennae')
            setFlyData({
                ...flyData,
                antennae : true
            })
            setCounter(100)   //end
            setData();
          break;
        case 100:
            setData();
          break;
        default:
            console.log('default switch')
            break;
      }

  }
  

  function butt2(){

    switch (counter) {
        case 0:
            setCounter(3);
            console.log(above);
          break;
        case 1:
            console.log('over back')
            setFlyData({
                ...flyData,
                overBack : true
            })
            setCounter(2)   
          break;
        case 2:
            console.log('tented')
            setFlyData({
                ...flyData,
                tented : true
            })
            setCounter(100)   //end
            setData();
          break;
        case 3:
            console.log('no legs')
            setCounter(100)   //end
            setData();
          break;
        case 4:
            console.log('no joints')
            setCounter(5)   
          break;
        case 5:
            console.log('no tail')
            setCounter(6)   
          break;
        case 6:
            console.log('no antennae')
            setCounter(100)   //end
            setData();
          break;
        case 100:
            setData();
          break;
        default:
            console.log('default switch')
            break;
      }

  }

  function butt3(){
    if(counter === 2){
        console.log('upright');
        setUpright(true);
        setCounter(100);
        setData();
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
                    Does it have legs?
            </div>
        </div>
    }
    {counter === 4 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    What type of legs does it have?
            </div>
        </div>
    }
    {counter === 5 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    Does it have a tail?
            </div>
        </div>
    }
    {counter === 6 &&
        <div className={styles["leftHeader"]}>
            <div className={styles["navMenu"]}>
                    Does it have an antennae?
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
        {counter === 3 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Has Legs
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                No Legs   
            </button>
        </>
        }
        {counter === 4 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Has Joints
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                No Joints   
            </button>
        </>
        }
        {counter === 5 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Has Tail
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                No Tail   
            </button>
        </>
        }
        {counter === 6 &&
        <>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Has Antennae
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                No Antennae   
            </button>
        </>
        }

    </div>

    <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
     
       
        </div>
    </div>
    <View margin="3rem 0">
        {flies && 
        flies.map((fly) => (
          <Flex
            key={fly.id || fly.name}
            direction="row"
            // justifyContent="center"
            // alignItems="center"
          >
            {fly.image && (
              <Image
                src={fly.image}
                alt={`visual aid for ${flies.name}`}
                style={{ width: 400 }}
              />       
            )}
            <Text as="strong" fontWeight={700}>
              {fly.name}
            </Text>
            <Text as="span">{fly.imitates}</Text>
            { fly.size > 0 &&
            <Text as="strong" fontWeight={700}>
            Size: {fly.size}
            </Text>              
            }
            <Text as="strong" >
            Category: {fly.category}
            </Text>  
            <>
              --------------------------------------------------------
            </>
          </Flex>
        ))}
    </View>
</div>
);
}

export default BugId;



//create 5 data flies, with one fly being the answer to current and prev questions
//keep sorting array based on data that matches bugs, incrementally
//have one bug object and compare and sort against it as it updates with user answers