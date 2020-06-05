import { StyleSheet } from "react-native";

import {dark} from "../colors";

export default StyleSheet.create({

   textFieldWrapper: { 
       marginTop: 10, 
       marginBottom: 10
    },

    inputField:{
        paddingLeft:15, 
        backgroundColor: "white", 
        borderRadius:13,
        height:40,
        color: dark,
        width: "85%"
    }

   
});