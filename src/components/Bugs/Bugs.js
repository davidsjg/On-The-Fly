import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./Bugs.module.css";
import { listNotes } from '../../graphql/queries';
import { API, Storage } from "aws-amplify";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View
  } from '@aws-amplify/ui-react';

function Bugs() {

const [flies, setFlies] = useState([]);
const [flyData, setFlyData] = useState({ above: '', legs : '', joints : '', tail : '', antennae : '', wingsOut : '' });


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

return  (

<div className={styles["mainContain"]}>


    <div className={styles["centerHeader"]}>
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
            <Text>
            {fly.legsJointed === true && 
            <>joints</>
            }
            </Text>   
 
            <>
              --------------------------------------------------------
            </>
          </Flex>
        ))}
      </View>
    </div>


</div>
);
}

export default Bugs;