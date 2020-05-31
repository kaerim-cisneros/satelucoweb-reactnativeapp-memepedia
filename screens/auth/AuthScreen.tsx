import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";

import {primary, dark, lightGrey} from "../../syles/colors";

export default () => {

    const [formToShow, setFormToShow] = useState("LOGIN");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <Text style={{ color: "white", fontWeight:"bold", paddingTop: 30, paddingLeft: 14, fontSize: 25}}>{headerText()}</Text>

            <View style={{ marginTop: 20, marginBottom: 10 }}>
                <TextInput  

                    style={{
                        paddingLeft:15, 
                        backgroundColor: "white", 
                        borderRadius:13,
                        height:40,
                        color: dark,
                        width: "85%",
                        marginLeft: 14
                    }}
                   
                    placeholder="Email"
                    value={email}
                    onChangeText={val => setEmail(val)}
                    autoCapitalize="none"
                    spellCheck = {false}
                />
            </View>

            <View style={{ marginTop: 10, marginBottom: 20 }}>
                <TextInput  

                    style={{
                        paddingLeft: 15, 
                        backgroundColor: "white", 
                        borderRadius:13,
                        height:40,
                        color: dark,
                        width: "85%",
                        marginLeft: 14
                    }}
                   
                    placeholder="Password"
                    value={password}
                    onChangeText={val => setPassword(val)}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity onPress={handleAuthTypePress}>
                <Text style={{ paddingLeft:14, color: lightGrey}}>{sceenTypeText()}</Text>
            </TouchableOpacity>
        </View>
    );    
};