import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";

import {primary, dark} from "../../syles/colors";

export default () => {

    const [formToShow, setFormToShow] = useState("LOGIN");
    const [email, setEmail] = useState("");

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
        <View style= {{ marginTop: 100, backgroundColor: primary, height: "100%" }}>
            <Text style={{ color: "white", fontWeight:"bold", paddingTop: 30, paddingLeft: 30}}>{headerText()}</Text>

            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <TextInput  

                    style={{
                        paddingLeft:30, 
                        backgroundColor: "white", 
                        borderRadius:20,
                        height:40,
                        color: dark
                    }}
                   
                    placeholder="Email"
                    value={email}
                    onChangeText={val => setEmail(val)}
                    autoCapitalize="none"
                    spellCheck = {false}
                />
            </View>

            <TouchableOpacity onPress={handleAuthTypePress}>
                <Text style={{ paddingLeft:30, color: "white"}}>{sceenTypeText()}</Text>
            </TouchableOpacity>
        </View>
    );    
};