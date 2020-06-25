import React, {useEffect, useContext} from "react";
import { View } from "react-native";

import * as SecureStore from "expo-secure-store";
import CurrentUserContext from "../../utils/context/CurrentUserContext"
import api from "../../utils/api";



interface IAuthLoadingScreenProps {
    navigation: {
        navigate: (screenName: string) => void;
    }
}

export default (props: IAuthLoadingScreenProps) => {
    const {setCurrentUser} = useContext(CurrentUserContext);

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const token = await SecureStore.getItemAsync("mempedia_secure_token")
    
    if (token) {
        api.get("logged_in", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log("response from check login", response.data);

            if (response.data.memipedia_user) {
                setCurrentUser(response.data.memipedia_user);
                props.navigation.navigate("App");
            } else {
                setCurrentUser(null);
                props.navigation.navigate("Auth");
            }
        })
        .catch((error) => {
            setCurrentUser(null);
            props.navigation.navigate("Auth");
        })
    } else{
        setCurrentUser(null);
        props.navigation.navigate("Auth");
    }
    
    
}

    return <View />
}
