import React, { useContext } from 'react';
import { View , Text} from 'react-native';
import * as SecureStore from "expo-secure-store";

import CurrentUserContext from "../utils/context/CurrentUserContext";
import Botton from "../components/helpers/Button"; 



interface IAcountScreenProps {
  navigation:{
    navigate: (arg:string) => void;
  };
}

export default (props: IAcountScreenProps) => {
  const {setCurrentUser} = useContext(CurrentUserContext);

  const handleSignOut = async () => {
      await SecureStore.deleteItemAsync("memipedia_secure_token")
      setCurrentUser(null);
      props.navigation.navigate("Auth");
  };

  return (
    <View>
      <Text> 
          Cuantas cuentas
      </Text>

      <View style={{ marginTop:20 }}>
        <Botton onPress={handleSignOut} text="Sign Out" />
      </View>
    </View>
  );
};
