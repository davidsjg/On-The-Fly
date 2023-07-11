import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createFlyMutation,
  deleteNote as deleteFlyMutation,
} from "./graphql/mutations";
import { CheckboxField, Radio, RadioGroupField } from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  const [flies, setFlies] = useState([]);

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

  async function createFly(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      above: form.get("above"),
      legs: form.get("hasLegs"),
      legsJointed: form.get("legsJointed"),
      tail: form.get("tail"),
      antennae: form.get("antennae"),
      wingsOut: form.get("wingsOut"),
      wingsDesc: form.get("wingsDesc"),
      imitates: form.get("imitates"),
      image: image.name,
      size: form.get("size"),
      category: form.get("category")
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createFlyMutation,
      variables: { input: data },
    });
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
    <View className="App">
      <Heading level={1}>On The Fly!</Heading>
      <View as="form" margin="3rem 0" onSubmit={createFly}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Fly Name"
            label="Fly Name"
            labelHidden
            variation="quiet"
            required
          />
          <CheckboxField label="Above Water?" name="above" value="yes" />
          <CheckboxField label="Has Legs?" name="hasLegs" value="yes" />
          <CheckboxField label="Legs Jointed?" name="legsJointed" value="yes" />
          <CheckboxField label="Tail?" name="tail" value="yes" />
          <CheckboxField label="Antennae?" name="antennae" value="yes" />
          <CheckboxField label="Wings Out?" name="wingsOut" value="yes" />
          <RadioGroupField label="Wing Description" name="wingsDesc">
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
          />
          <TextField
            name="size"
            placeholder="Fly Size"
            label="Fly Size"
            labelHidden
            variation="quiet"
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <RadioGroupField label="Fly Category" name="category">
            <Radio value="Midge">Midge</Radio>
            <Radio value="Mayfly">Mayfly</Radio>
            <Radio value="Caddis">Caddis</Radio>
            <Radio value="Stonefly">Stonefly</Radio>
          </RadioGroupField>
          <Button type="submit" variation="primary">
            Create Fly
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Flies</Heading>
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
            <Button variation="link" onClick={() => deleteFly(fly)}>
              Delete fly
            </Button>
            <>
              --------------------------------------------------------
            </>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);