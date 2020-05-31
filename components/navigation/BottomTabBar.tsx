import React from "react";
import { View, TouchableOpacity, Text,  } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



import BottomTabBar from "../../syles/navigation/bottomTabBar";

interface IBottomTabBarProps{
    navigate: (arg: string) => void;
}

export default (props: IBottomTabBarProps) => {
    return <View style={BottomTabBar.container}>
        <TouchableOpacity onPress={() => props.navigate("Feed")}>
            <AntDesign name="notification" color="white" size={30} />            
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate("Search")}>
            <AntDesign name="search1" color="white" size={30} /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate("PostForm")}>
            <AntDesign name="form" color="white" size={30} /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigate("Account")}>
            <MaterialCommunityIcons name="account-circle" color="white" size={30} /> 
        </TouchableOpacity>
    </View>
}