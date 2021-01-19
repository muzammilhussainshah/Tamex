import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Actions } from "react-native-router-flux";
import FastImage from 'react-native-fast-image'
// import Entypo from "react-native-vector-icons/Entypo"

const AppHeader = ({ heading, firstImg, secondImg }) => {
    return (
        <View style={{ flex: 1, flexDirection: "row",backgroundColor:Colors.bgColor,zIndex:2 }}>
            <TouchableOpacity style={{ flex: 1 , justifyContent: "center",padding:10 }} >
                <Ionicons name="menu-outline" style={{  color: Colors.primary, fontSize: 25 }} />
            </TouchableOpacity>
            <View style={{ flex: 9 , justifyContent: "center" }}>
                <Text style={{ color: Colors.primary, fontSize: 22, letterSpacing: 1, fontWeight: "bold" }}>Dashbord</Text>
            </View>
        </View>
    )

};
const styles = StyleSheet.create({
    heading: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: 0.51,
        color: Colors.fontClr,
    }
});

export default AppHeader;