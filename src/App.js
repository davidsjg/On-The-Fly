import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
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
    setFlies(fliesFromAPI);
  }

  async function createFly(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      above: form.get("above"),
      legs: form.get("hasLegs"),
      legsJointed: form.get("legsJointed"),
      tail: form.get("tail"),
      antennae: form.get("antennae"),
      wingsOut: form.get("wingsOut"),
      wingsDesc: form.get("wingsDesc"),
      description: form.get("description")
    };
    console.log(data);
    await API.graphql({
      query: createFlyMutation,
      variables: { input: data },
    });
    fetchFlies();
    event.target.reset();
  }

  async function deleteFly({ id }) {
    const newFlies = flies.filter((fly) => fly.id !== id);
    setFlies(newFlies);
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
          <CheckboxField
            label="Above Water?"
            name="above"
            value="yes"
          />
          <CheckboxField
            label="Has Legs?"
            name="hasLegs"
            value="yes"
          />
          <CheckboxField
            label="Legs Jointed?"
            name="legsJointed"
            value="yes"
          />
          <CheckboxField
            label="Tail?"
            name="tail"
            value="yes"
          />
          <CheckboxField
            label="Antennae?"
            name="antennae"
            value="yes"
          />
          <CheckboxField
            label="Wings Out?"
            name="wingsOut"
            value="yes"
          />
          <RadioGroupField
            label="Wing Description"
            name="wingsDesc"
          >
            <Radio value="flat">Flat</Radio>
            <Radio value="tented">Tented</Radio>
            <Radio value="upright">Upright</Radio>
          </RadioGroupField>
          <TextField
            name="description"
            placeholder="Fly Description"
            label="Fly Description"
            labelHidden
            variation="quiet"
            required
          />
          
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
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {fly.name}
            </Text>
            <Text as="span">{fly.description}</Text>
            <Button variation="link" onClick={() => deleteFly(fly)}>
              Delete fly
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);