import React from "react";
import {Image} from "react-native";

const imgPath = require("../../assets/memepedia-logo.png")

export default () => {
     return < Image source={imgPath} style={{ height: 45, width: 46}} />;
}