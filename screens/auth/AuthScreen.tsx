import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";


import {lightGrey} from "../../syles/colors";

import textInputStyles from "../../syles/forms/textInputStyles"
const { textFieldWrapper, inputField } = textInputStyles
import authScreenStyles from "../../syles/stacks/auth/authScreenStyles"

import API from "../../utils/api";

interface IAuthScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    };
};


export default (props: IAuthScreenProps) => {

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

    const handleSubmit = () => {
        const userAuth = {
            auth: {
                email: email,
                password: password
            }
        }
    API
        .post("memipedia_user_token", userAuth)
        .then(response => {
            console.log("Response from handle submit",response.data);
            if (response.data.jwt) {
                props.navigation.navigate("Feed")
            }
        })
        .catch(error => {
            console.log("error getting token", error);
        });

    };

    const handleAuthTypePress =() => {
        if (formToShow === "LOGIN") {
           setFormToShow("REGISTER");
        } else if (formToShow === "REGISTER") {
            setFormToShow("LOGIN");
        }
    };

    return (
        <View style= {authScreenStyles.container}>
            <Text style={{ color: "white", fontWeight:"bold", paddingTop: 30, fontSize: 25}}>{headerText()}</Text>

            <View style={ textFieldWrapper}>
                <TextInput  

                    style={inputField}
                   
                    placeholder="Email"
                    value={email}
                    onChangeText={val => setEmail(val)}
                    autoCapitalize="none"
                    spellCheck = {false}
                />
            </View>

            <View style={ textFieldWrapper }>
                <TextInput  

                    style={
                        inputField
                    }
                   
                    placeholder="Password"
                    value={password}
                    onChangeText={val => setPassword(val)}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity onPress={handleAuthTypePress}>
                <Text style={{ color: lightGrey, paddingTop:10}}>{sceenTypeText()}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit}>
                <Text style={{ color: "white", paddingTop:40}}>{headerText()}</Text>
            </TouchableOpacity>
        </View>
    );    
};