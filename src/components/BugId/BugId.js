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
import styled from "styled-components";
import WrapComp from '../WrapComp/WrapComp';


function BugId() {

const [counter, setCounter] = useState(0);
const [flies, setFlies] = useState();
const [fliesAbove, setFliesAbove] = useState();
const [fliesBelow, setFliesBelow] = useState();


const [flyData, setFlyData] = useState({ imitates: '', above: '', wingsOut : false, flat: false, wingsDesc: '', overBack : false, tented : false, upright: false, legs : '', joints : '', tail : '', antennae : ''  });

useEffect(() => {
    fetchFlies();
    calcImitate();
    calcFlies();
}, []);


useEffect(() => {
    setData();
    calcFlies();
}, [flyData]);

function calcImitate(){
    flies && flies.map((fly) => {
        // console.log(fly)
        if(fly.imitates){
            setFlyData({
                ...flyData,
                imitates : true
            })
        }
    })
}

function calcFlies(){
    //have all the flies
    //have a fly to compare it against


    // flies && flies.map((fly) => {
    // })


    if(flyData.above) {
        const newFlies = flies.filter((fly) => fly && fly.above === true);
        setFlies(newFlies);
            if(flyData.wingsOut){
        const newFlies2 = flies.filter((fly) => fly.wingsOut === true);
        setFlies(newFlies2);
    } 

    if(flyData.overBack){
        const newFlies2 = flies.filter((fly) => fly.wingsOut !== true);
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
    }  

    if (flyData.legs === false) {
        const newFlies2 = flies && flies.filter((fly) => fly.legs === false);
        setFlies(newFlies2);    
    } else if (flyData.legs === true){
        const newFlies2 = flies && flies.filter((fly) => fly.legs === true);
        setFlies(newFlies2);   
    }

    if (flyData.joints === true){
        const newFlies5 = flies && flies.filter((fly) => fly.legsJointed === true);
        setFlies(newFlies5);   
    } 
    if (flyData.joints === false){
        const newFlies5 = flies && flies.filter((fly) => fly.legsJointed === false);
        setFlies(newFlies5);  
    }

    console.log(flies);
    console.log(flyData);

    if (flyData.tail === true){
        console.log('fly tail = true')
        const newFlies5 = flies && flies.filter((fly) => fly.tail === true);
        setFlies(newFlies5);  
        if(newFlies5.length === 1){
            setCounter(100);
        }    
    } 
    if (flyData.tail === false){
        console.log('inside false')
        console.log(flies);
        const newFlies6 = flies && flies.filter((fly) => fly.tail !== true);
        console.log(newFlies6);
        setFlies(newFlies6);     
        if(newFlies6.length === 1){
            setCounter(100);
        }    
    }

    if(flyData.antennae === true){
        const newFlies5 = flies.filter((fly) => fly.antennae === true);
        setFlies(newFlies5);      
    } else if (flyData.antennae === false){
        const newFlies5 = flies.filter((fly) => fly.antennae === false);
        setFlies(newFlies5);      
    }
    


    if(flies && flies.length === 1){
        console.log('inside sow sow binks');
        const newFlies5 = flies.filter((fly) => fly.name === 'Sowbug Nymph');
        setFlies(newFlies5);        
    }
    if(flies && flies.length === 1 && flies[0].name === 'Dragonfly Nymph'){
        const newFlies5 = flies.filter((fly) => fly.name === 'Dragonfly Nymph');
        setFlies(newFlies5);        
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

    const finalFlies = fliesFromAPI.filter((fly) => fly.imitates === "")
    const aboveFlies = finalFlies.filter((fly) => fly.above === true)
    const belowFlies = finalFlies.filter((fly) => fly.above !== true)

    setFliesAbove(aboveFlies);
    setFliesBelow(belowFlies);

    setFlies(finalFlies);
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
            setFlies(fliesAbove);
            console.log('above = true');
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
            console.log(flies[0].name);
            if(flies[0].name === 'Sowbug Nymph'){
                setCounter(100);
            }
            setCounter(6)   //end
          break;
        case 6:
            console.log('has antennae')
            setFlyData({
                ...flyData,
                antennae : true
            })
            setCounter(100)   //end
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
            setFlies(fliesBelow);
            console.log("above is false");
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
          break;
        case 3:
            console.log('no legs')
            setFlyData({
                ...flyData,
                legs : false
            })
            setCounter(100)   //end
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
    }
  }

  function resetData(){
    const blankDataObj = { imitates: '', above: '', wingsOut : false, flat: false, wingsDesc: '', overBack : false, tented : false, upright: false, legs : '', joints : '', tail : '', antennae : ''  }
    setCounter(0);
    setFlyData(blankDataObj);
    fetchFlies();
  }

  //if bugsArray state = 100, show all the flies with imitates != null


return  (

<div className={styles["mainContain"]}>

    <button onClick={resetData}>Reset</button>

    {counter === 0 &&
        <Question myProp={'Was the bug above or below water?'} cName={'class1'}/>
    }
    {counter === 1 &&
        <Question myProp={'What direction do the wings go?'} cName={'class1'}/>
    }
    {counter === 2 &&
        <Question myProp={'How do the wings lay?'} cName={'class1'}/>    
    }
    {counter === 3 &&
        <Question myProp={'Does it have legs?'} cName={'class1'}/> 
    }
    {counter === 4 &&
        <Question myProp={'What type of legs does it have?'} cName={'class1'}/> 
    }
    {counter === 5 &&
        <Question myProp={'Does it have a tail?'} cName={'class1'}/> 
    }
    {counter === 6 &&
        <Question myProp={'Does it have an antennae?'} cName={'class1'}/> 
    }
    {counter === 100 &&
        <>    
        <div className={styles["endSearch"]}>
        End of Search - Click Bug to Learn More!  
        </div>
        <View margin="3rem 0" className={styles["finalView"]} >
            {flies && 
                flies.map((fly) => (
                    <Link to={`/bugDetail/${fly.id}`} key={fly.id || fly.name}>
                    <Card className={styles["flyCardFinal"]} >
                        {fly.image && (
                        <Image
                            src={fly.image}
                            alt={`visual aid for ${flies.name}`}
                            className={styles["finalImg"]}
                        />       
                        )}
                        <div as="strong" fontWeight={700} className={styles["finalName"]}>
                        {fly.name}
                        </div>
                    </Card>
                    </Link>

            ))}
        </View>
    </>
    }


    <div className={styles["centerContain"]}>
        {counter === 0 &&
        <>
        <ButtonAnswer answer='Above' updateCounter={updateCounter} butt='but1' />  {/*cName={'class2'} */}
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
        </>
        }

    </div>

    {counter !== 100 &&
    <View margin="3rem 0"className={styles["flyView"]} >
        {flies && 
        flies.map((fly) => (
            <Link to={`/bugDetail/${fly.id}`} key={fly.id || fly.name} className={styles["someCard"]} >
                <Card className={styles["flyCard"]} >
                    {fly.image && (
                    <Image
                        src={fly.image}
                        alt={`visual aid for ${flies.name}`}
                        className={styles["img1"]} 
                    />       
                    )}
                    <div className={styles["separator"]} >
                        
                    </div>
                    <Text as="strong" fontWeight={700}>
                    {fly.name}
                    </Text>
                </Card>
            </Link>
        ))}
    </View>
    }

</div>
);
}

export default BugId;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 250px; */
  margin: 0 30px;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 12%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-weight: 100;
    padding: 0 20px;
    color: black;
    background-size: contain;
    border-radius: 2px;
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



//create 5 data flies, with one fly being the answer to current and prev questions
//keep sorting array based on data that matches bugs, incrementally
//have one bug object and compare and sort against it as it updates with user answers

//at very end, need to have all the selected options output
//need to be able to click on the fly
//take to detail page that has it as main event, with potential flies to use under


//color of button when Bug Id page to click image for home
//bugId remains orange
//when that button is clicked, change state on App to true, pass that value to SelectButtons