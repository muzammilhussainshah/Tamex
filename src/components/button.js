import React from "react";
import { TouchableOpacity, StyleSheet, Text, } from 'react-native';
import Colors from '../common/Colors';
import Entypo from "react-native-vector-icons/Entypo"

const Button = ({ backgroundColor, key, marginTop, width, _func, name, textColor, borderColor }) => {
    return (
        <TouchableOpacity onPress={_func}
            activeOpacity={0.8}
            style={
                [styles.buttonDiv,
                {
                    backgroundColor: backgroundColor,
                    marginTop: marginTop,
                    width: width,
                    borderColor: borderColor ? borderColor : null
                }
                ]}>
            {
                (name === "Faild" || name === "Reject") ? (
                    <Entypo name="cross" style={{ fontSize: 18, color: textColor, marginRight: 5 }} />
                ) : null
            }
            {
                (name === "Delivered" || name === "Accept") ?
                    (
                        <Entypo name="check" style={{ fontSize: 18, color: textColor, marginRight: 5 }} />
                    ) : null
            }
            <Text style={[styles.buttonText, { color: textColor }]}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: { fontFamily: "WorkSans-SemiBold", fontWeight: "bold", fontSize: 16, color: '#ffffff', letterSpacing: 1, },
    buttonDiv: { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 3, height: 50, borderRadius: 10, borderWidth: 2 }
});

export default Button;