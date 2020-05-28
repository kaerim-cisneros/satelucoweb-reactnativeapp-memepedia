import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default props => {
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
