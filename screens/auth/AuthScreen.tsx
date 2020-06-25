import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput, ScrollView} from "react-native";

import HeaderLogo from "../../components/images/HeaderLogo";
import {lightGrey} from "../../syles/colors";

import textInputStyles from "../../syles/forms/textInputStyles"
const { textFieldWrapper, inputField } = textInputStyles
import authScreenStyles from "../../syles/stacks/auth/authScreenStyles"

import API from "../../utils/api";
import Button from "../../components/helpers/Button";
import {formatErrors} from "../../utils/textFormatters";



interface IAuthScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    };
};


export default (props: IAuthScreenProps) => {

    const [formToShow, setFormToShow] = useState("LOGIN");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sceenTypeText = () =>{
        if (formToShow === "LOGIN") {
            return "Need an account? Register";
        } else if (formToShow === "REGISTER") {
            return "Already have an account? Login"
        }
    };

    const buttonText = () =>{
        if (formToShow === "LOGIN") {
            return "Login";
        } else if (formToShow === "REGISTER") {
            return "Register"
        }
    };

    const handleLogin = () => {
        const userLogin = {
            auth: {
                email: email,
                password: password
            }
        }
    API
        .post("memipedia_user_token", userLogin)
        .then(response => {
            if (response.data.jwt) {
                props.navigation.navigate("Feed")
            } else {
                alert(
                    "Wrong Email or Password"
                );
            }

            setIsSubmitting(false);    
        })
        .catch(error => {
            setIsSubmitting(false);        
            alert(
                "Wrong Email or Password"
            );
        });

    };

    const handleRegistration = () =>{
        const userRegistration = {
            user: {
                email: email,
                password: password
            }
        }
    API
        .post("memipedia_users", userRegistration)
        .then(response => {
            if (response.data.memipedia_user) {
                props.navigation.navigate("Feed")
            } else {
                
                alert(
                    `Error creating account: ${formatErrors(response.data.errors)}`
                );
            }

            setIsSubmitting(false);    
        })
        .catch(error => {
            setIsSubmitting(false);        
            alert(
                "Registration Error"
            );
        });

    }

    const handleSubmit = () => {
        setIsSubmitting(true);
        
        if (formToShow === "LOGIN") {
           handleLogin();
        } else {
            handleRegistration();
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
        <ScrollView style= {authScreenStyles.container}>
            <Text style={{ marginTop: 30, marginBottom: 20}}><HeaderLogo/></Text>

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
            
            {isSubmitting ? (
                <Button text={"Submitting..."} onPress = {handleSubmit} disabled={true} />
            ):(
                <Button text={buttonText()} onPress = {handleSubmit}/>
            )}

        </ScrollView>
    );    
};