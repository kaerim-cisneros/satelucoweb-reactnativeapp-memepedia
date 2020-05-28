import React from "react";
import { View, Text } from "react-native";

interface IContainerProps {
    children:any,
}

export default (props: IContainerProps) => {
    return(
        <View>
            <Text>El Tupper We</Text>

            {props.children}
        </View>
    );
};