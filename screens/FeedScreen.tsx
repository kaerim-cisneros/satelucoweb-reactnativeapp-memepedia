import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Container from "../components/layouts/Container";

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  }
} 


export default (props: IFeedScreenProps) => {
  return (
    <Container>
      <Text> 1os Pininos</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
        <Text>
         Lobo estas ahi?
        </Text>
      </TouchableOpacity>

    </Container>
  );
};
