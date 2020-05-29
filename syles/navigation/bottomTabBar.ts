import { StyleSheet } from "react-native";

import {primary} from "../colors";

export default StyleSheet.create({
   container: {
        backgroundColor: primary,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop:15,
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 60
               
   } 
});