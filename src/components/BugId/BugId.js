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
    View,
    Card
  } from '@aws-amplify/ui-react';
import Question from '../Question/Question';
import ButtonAnswer from '../ButtonAnswer/ButtonAnswer';

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

const [flyData, setFlyData] = useState({ above: '', wingsOut : false, flat: false, wingsDesc: '', overBack : false, tented : false, upright: false, legs : false, joints : false, tail : false, antennae : false  });


let myCount = 0;
let above = false;
let outToSide = false;

useEffect(() => {
    fetchFlies();
  }, []);


useEffect(() => {
    setData();
    calcFlies();
  }, [flyData]);

function calcFlies(){
   // const newFlies = flies.filter((fly) => fly.id !== id);
    //have all the flies
    //have a fly to compare it against
    console.log(flyData);

    flies && flies.map((fly) => {
        // console.log(fly)
    })

    if(flyData.above === true) {
        const newFlies = flies.filter((fly) => fly.above === true);
        setFlies(newFlies);
    } 

    if(flyData.wingsOut === true){
        const newFlies2 = flies.filter((fly) => fly.wingsOut === true);
        setFlies(newFlies2);
    } 

    if(flyData.flat === true){
        const newFlies2 = flies.filter((fly) => fly.wingsDesc === 'flat');
        setFlies(newFlies2);
    } 
    if (flyData.upright === true){
        const newFlies2 = flies.filter((fly) => fly.wingsDesc === 'upright');
        setFlies(newFlies2);
    } 
    if (flyData.tented === true){
        const newFlies2 = flies.filter((fly) => fly.wingsDesc === 'tented');
        setFlies(newFlies2);
    }
    if(flyData.above !== true) {

        const newFlies = (flies || []).filter((fly) => fly.above === false);
        // const newFlies = flies.filter((fly) => fly.above === false);
        // console.log(newFlies);
        setFlies(newFlies);

        if(flyData.legs === true){
            const newFlies2 = (flies || []).filter((fly) => fly.legs === true);
            setFlies(newFlies2);    
    
        }  

        //STOPPED HERE, DO THE REST BRAI
    }
    if(flyData.joints === true){
        console.log('inside joints');

        flies.map((fly) => {
            console.log(fly);
        })
        

        const newFlies3 = (flies || []).filter((fly) => fly.legsJointed === true);
        console.log(newFlies3);
        setFlies(newFlies3);     
   
    } 
    
    if(flyData.tail === true){
        const newFlies4 = flies.filter((fly) => fly.tail === true);
        console.log(newFlies4);
        setFlies(newFlies4);  
        if(flyData.antennae === true){
            const newFlies5 = flies.filter((fly) => fly.antennae === true);
            console.log(newFlies5);
            setFlies(newFlies5);      
        }
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
    console.log(e);
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
    // console.log(fly);
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
            setData();
          break;
        case 5:
            console.log('has tail')
            setFlyData({
                ...flyData,
                tail : true
            })
            setCounter(6)   //end
            setData();
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
            setFlyData({
                ...flyData,
                above : false
            })
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
            setFlyData({
                ...flyData,
                legs : false
            })
            setCounter(100)   //end
            setData();
          break;
        case 4:
            console.log('no joints')
            setFlyData({
                ...flyData,
                joints : false
            })
            setCounter(5)   
          break;
        case 5:
            console.log('no tail')
            setFlyData({
                ...flyData,
                tail : false
            })
            setCounter(6)   
          break;
        case 6:
            console.log('no antennae')
            setFlyData({
                ...flyData,
                antennae : false
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

  function butt3(){
    if(counter === 2){
        console.log('upright');
        setFlyData({
            ...flyData,
            upright : true
        })        
        setCounter(100);
        setData();
    }
  }

  function resetData(){
    const blankDataObj = { above: '', wingsOut : false, flat: false, wingsDesc: '', overBack : false, tented : false, upright: false, legs : false, joints : false, tail : false, antennae : false  }
    setCounter(0);
    setFlyData(blankDataObj);
    fetchFlies();
  }

  //if bugsArray state = 100, show all the flies with imitates != null


return  (

<div className={styles["mainContain"]}>

    <button onClick={resetData}>Reset</button>

    {counter === 0 &&
        <Question myProp={'Was the bug above or below water?'}/>
    }
    {counter === 1 &&
        <Question myProp={'What direction do the wings go?'}/>
    }
    {counter === 2 &&
        <Question myProp={'How do the wings lay?'}/>    
    }
    {counter === 3 &&
        <Question myProp={'Does it have legs?'}/> 
    }
    {counter === 4 &&
        <Question myProp={'What type of legs does it have?'}/> 
    }
    {counter === 5 &&
        <Question myProp={'Does it have a tail?'}/> 
    }
    {counter === 6 &&
        <Question myProp={'Does it have an antennae?'}/> 
    }
    {counter === 100 &&
        <Question myProp={'End'}/> 
    }


    <div className={styles["centerContain"]}>
        {counter === 0 &&
        <>
        <ButtonAnswer answer='Above' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='Below' updateCounter={updateCounter} butt='but2'/>
        </>
        }
        {counter === 1 &&
        <>
        <ButtonAnswer answer='Out to Side' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='Over Back' updateCounter={updateCounter} butt='but2'/>
        </>
        }
        {counter === 2 &&
        
        <>
        <ButtonAnswer answer='Flat over back' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='Tented over back' updateCounter={updateCounter} butt='but2'/>
        <ButtonAnswer answer='Upright' updateCounter={updateCounter} butt='but3'/>
        </>
        }
        {counter === 3 &&
        <>
        <ButtonAnswer answer='Has Legs' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='No Legs' updateCounter={updateCounter} butt='but2'/>
        </>
        }
        {counter === 4 &&
        <>
        <ButtonAnswer answer='Has Joints' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='No Joints' updateCounter={updateCounter} butt='but2'/>
        </>
        }
        {counter === 5 &&
        <>
        <ButtonAnswer answer='Has Tail' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='No Tail' updateCounter={updateCounter} butt='but2'/>
        </>
        }
        {counter === 6 &&
        <>
        <ButtonAnswer answer='Has Antennae' updateCounter={updateCounter} butt='but1'/>
        <ButtonAnswer answer='No Antennae' updateCounter={updateCounter} butt='but2'/>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but1')}>  
                Has Antennae
            </button>
            <button className={styles["navMenu"]} onClick={() => updateCounter('but2')}>
                No Antennae   
            </button>
        </>
        }

    </div>

    
    <View margin="3rem 0"className={styles["flyView"]} >
        {flies && 
        flies.map((fly) => (
        //   <Flex

            // direction="row"
            // justifyContent="center"
            // alignItems="center"
        //   >
            <Card className={styles["flyCard"]} key={fly.id || fly.name}>
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



            </Card>
        //   </Flex>
        ))}
    </View>
</div>
);
}

export default BugId;



//create 5 data flies, with one fly being the answer to current and prev questions
//keep sorting array based on data that matches bugs, incrementally
//have one bug object and compare and sort against it as it updates with user answers

//put flies/bugs in cards, clean em up, make more per rows so more noticable when you whittle