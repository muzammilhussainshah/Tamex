import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Actions } from "react-native-router-flux"; 
const Signupheader = ({  label, goBack }) => {
    return (
        <View style={[styles.TitleDiv]}>

            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center" }}>
                {goBack &&
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <AntDesign name="arrowleft" style={{ color: Colors.fontClr, fontSize: 30 }} />
                    </TouchableOpacity>
                }
            </View>


            < View style={{ flex: 6.6, justifyContent: "center", }}>
                <Text style={styles.Title}>{label}</Text>
            </View>

            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center", }}>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    TitleDiv: { flexDirection: "row", height: 85, },
    Title: { fontSize: 23, color: Colors.fontClr, fontFamily: "WorkSans-Bold", letterSpacing: 1.3, },

});

export default Signupheader;