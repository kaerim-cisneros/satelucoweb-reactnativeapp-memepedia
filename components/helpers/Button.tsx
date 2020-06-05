import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {dark, primary} from "../../syles/colors"

interface IButtonProps{
    text: any;
    onPress: any;
    disabled?: boolean;
}

export default (props: IButtonProps) => {
    return(
        <TouchableOpacity 
            style={{
                backgroundColor: props.disabled ? dark : "white",
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop:40,
                width: "85%",
                borderRadius: 5
            }}
            {...props}
        >
            <Text style={{ color: props.disabled ? "white" : primary, fontWeight:"700", fontSize: 16 }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}