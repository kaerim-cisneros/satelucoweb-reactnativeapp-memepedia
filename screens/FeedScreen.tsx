import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  }
} 


export default (props: IFeedScreenProps) => {
  return (
    <View>
      <Text> 1os Pininos</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
        <Text>
         Lobo estas ahi?
        </Text>
      </TouchableOpacity>

    </View>
  );
};
