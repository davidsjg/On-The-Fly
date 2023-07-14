import React, { useState, useEffect } from "react";
import "./CreateFly.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View
} from '@aws-amplify/ui-react';
import { listNotes } from "../../graphql/queries";
import {
  createNote as createFlyMutation,
  deleteNote as deleteFlyMutation,
} from "../../graphql/mutations";
import { CheckboxField, Radio, RadioGroupField } from "@aws-amplify/ui-react";


function CreateFly () {
  const [flies, setFlies] = useState([]);
  const [flyData, setFlyData] = useState({ above: '', legs : false, joints : false, tail : '', antennae : false, wingsOut : '' });


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

  function check1(){
    setFlyData({
      ...flyData,
      above : true
  })
  }
  function check2(){
    setFlyData({
      ...flyData,
      legs : true
  })
  }
  function check3(){
    setFlyData({
      ...flyData,
      joints : true
  })
  }
  function check4(){
    setFlyData({
      ...flyData,
      tail : true
  })
  }
  function check5(){
    setFlyData({
      ...flyData,
      antennae : true
  })
  }
  function check6(){
    setFlyData({
      ...flyData,
      wingsOut : true
  })
  }

  async function createFly(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    console.log(form);
    const data = {
      name: form.get("name"),
      above: flyData.above,
      legs: flyData.legs,
      legsJointed: flyData.joints,
      tail: flyData.tail,
      antennae: flyData.antennae,
      wingsOut: flyData.wingsOut,
      wingsDesc: form.get("wingsDesc"),
      imitates: form.get("imitates"),
      image: image.name,
      size: form.get("size"),
      category: form.get("category")
    };
    console.log(data);
    if (!!data.image) await Storage.put(data.name, image);
    console.log(data)
    await API.graphql({
      query: createFlyMutation,
      variables: { input: data },
    }).then((e) => {
      console.log(e);
    })
    fetchFlies();
    event.target.reset();
  }

  async function deleteFly({ id, name }) {
    const newFlies = flies.filter((fly) => fly.id !== id);
    setFlies(newFlies);
    await Storage.remove(name);
    await API.graphql({
      query: deleteFlyMutation,
      variables: { input: { id } },
    });
  }

  return (
    <>
    <View className="App">
      <Heading level={1}>On The Fly!</Heading>
      <View as="form" margin="3rem 0" onSubmit={createFly}>
        <Flex className="mainFlex">
          <TextField
            name="name"
            placeholder="Fly Name"
            label="Fly Name"
            labelHidden
            variation="quiet"
            required
            className="flyText"
          />
          <CheckboxField label="Above Water?" name="above" value="yes" onClick={check1} />
          <CheckboxField label="Has Legs?" name="hasLegs" value="yes"onClick={check2}  />
          <CheckboxField label="Legs Jointed?" name="legsJointed" value="yes" onClick={check3} />
          <CheckboxField label="Tail?" name="tail" value="yes" onClick={check4} />
          <CheckboxField label="Antennae?" name="antennae" value="yes" onClick={check5}  />
          <CheckboxField label="Wings Out?" name="wingsOut" value="yes" onClick={check6} />
          <RadioGroupField label="Wing Description" name="wingsDesc" className="wingDesc">
            <Radio value="flat">Flat</Radio>
            <Radio value="tented">Tented</Radio>
            <Radio value="upright">Upright</Radio>
          </RadioGroupField>
          <TextField
            name="imitates"
            placeholder="Imitates what?"
            label="Fly Imitation"
            labelHidden
            variation="quiet"
            className="flyText"
          />
          <TextField
            name="size"
            placeholder="Fly Size"
            label="Fly Size"
            labelHidden
            variation="quiet"
            className="flyText"
          />
          <View
            name="image"
            as="input"
            type="file"
            // style={{ alignSelf: "end" }}
            className="imageUp"
          />
          <RadioGroupField label="Fly Category" name="category">
            <Radio value="Midge">Midge</Radio>
            <Radio value="Mayfly">Mayfly</Radio>
            <Radio value="Caddis">Caddis</Radio>
            <Radio value="Stonefly">Stonefly</Radio>
          </RadioGroupField>
          <button type="submit"className="submitButton">
              Create Fly
          </button>
        </Flex>
      </View>
      <Heading level={2}  >
        <div className="bugsNflies">
        Current Bugs and Flies         
        </div>
      </Heading>
      <View margin="3rem 0">
        {flies.map((fly) => (
          <Flex
            key={fly.id || fly.name}
            direction="column"
            justifyContent="center"
            alignItems="center"
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
  
            <Text as="strong" >
            wingDesc: {fly.wingsDesc}
            </Text>  
            <Text as="strong" >
            {fly.above === true && 
            <>above</>
            }
            </Text>  
            <Text as="strong" >
            {fly.legs === true && 
            <>legs</>
            }
            </Text>
            <Text>
            {fly.antennae === true && 
            <>antennae</>
            }
            </Text>   
            <Text>
            {fly.wingsOut === true && 
            <>wings out</>
            }
            </Text>   
            <Text>
            {fly.tail === true && 
            <>tail</>
            }
            </Text>   
 
            <Button variation="link" onClick={() => deleteFly(fly)}>
              Delete fly
            </Button>
            <>
              --------------------------------------------------------
            </>
          </Flex>
        ))}
      </View>
    </View>
    </>
  );
};

export default CreateFly;

//basically want to do a slide show of questions
//first question pops up "Above or Below Water?" with 2 buttons(Above/Below)
//user selects one, buttons disappear, next buttons come in
//onClick = make the buttons disappear or replace it with a different component
//do a conditional renter based on true/false
//when they click to answer the first question, set it to false and have the other component render
//when you set it to false, have it call a function with a timer, sets it to false, then sets it back to true after __ seconds
//buttons fade back in
//simultaneously, have all the 2-pair questions in an object or array
//with each button click to answer a question, increment a state
//display the array at position state index

//could also use the counter state and do conditional rendering based on what that state is
//if state.counter=1, display first question with set of buttons
//if state.counter=2, display second question with set of buttons
//this may be better as it's more instantaneous
//can also factor in other conditions when rendering based on previous questions' answers (if you can collect them on the fly...pun intended doosh)
//might have to separately collect each on each button click, then see if the FormData still makes a nice object too
//call a different function and pass (event), get what you need off of it and store it in a context state object

//dank