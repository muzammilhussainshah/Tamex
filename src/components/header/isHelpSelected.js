import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Actions } from "react-native-router-flux";
import FastImage from 'react-native-fast-image'
// import Entypo from "react-native-vector-icons/Entypo"

const IsHelpSelected = ({ }) => {
    return (
        <View style={{ width: "90%", height: "100%", flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-end" }}>
            <Text style={{ fontSize: 24, fontFamily: "WorkSans-SemiBold" }}>I can help in</Text>
            <TouchableOpacity >
                <AntDesign name="close" style={{ fontSize: 35, color: Colors.shade }} />
            </TouchableOpacity>
        </View>
    )

};
const styles = StyleSheet.create({

});

export default IsHelpSelected;