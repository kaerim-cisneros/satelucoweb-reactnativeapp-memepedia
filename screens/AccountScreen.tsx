import React from 'react';
import { Text } from 'react-native';

import Container from "../components/layouts/Container";


interface IAccountScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  }
} 


export default (props: IAccountScreenProps) => {
  return (
    <Container navigate={props.navigation.navigate}>
      <Text> 
          Cuantas cuentas
        </Text>
    </Container>
  );
};