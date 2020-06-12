import { StyleSheet} from "react-native";
import Constants from "expo-constants";

import { primary } from "./../../colors"

export default StyleSheet.create({
    container: {
        backgroundColor: primary,
        paddingLeft: "7%",
        height: "100%",
        marginTop: Constants.statusBarHeight 

    }

});