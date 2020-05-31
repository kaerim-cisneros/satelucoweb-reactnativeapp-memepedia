import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default () => {

    const [formToShow, setFormToShow] = useState("LOGIN");

    const sceenTypeText = () =>{
        if (formToShow === "LOGIN") {
            return "Need an account? Register";
        } else if (formToShow === "REGISTER") {
            return "Already have an account? Login"
        }
    };

    const headerText = () =>{
        if (formToShow === "LOGIN") {
            return "Login";
        } else if (formToShow === "REGISTER") {
            return "Register"
        }
    };

    const handleAuthTypePress =() => {
        if (formToShow === "LOGIN") {
           setFormToShow("REGISTER");
        } else if (formToShow === "REGISTER") {
            setFormToShow("LOGIN");
        }
    };

    return (
        <View style= {{ marginTop: 100}}>
            <Text>{headerText()}</Text>

            <TouchableOpacity onPress={handleAuthTypePress}>
                <Text>{sceenTypeText()}</Text>
            </TouchableOpacity>
        </View>
    );    
};