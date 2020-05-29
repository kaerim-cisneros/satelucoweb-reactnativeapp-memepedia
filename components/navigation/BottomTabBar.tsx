import React from "react";
import { View, TouchableOpacity, Text,  } from "react-native";

import BottomTabBar from "../../syles/navigation/bottomTabBar";

interface IBottomTabBarProps{
    navigate: (arg: string) => void;
}

export default (props: IBottomTabBarProps) => {
    return <View style={BottomTabBar.container}>
        <TouchableOpacity onPress={() => props.navigate("Feed")}>
            <Text>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate("Search")}>
            <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate("PostForm")}>
            <Text>Form</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate("Account")}>
            <Text>Account</Text>
        </TouchableOpacity>
    </View>
}