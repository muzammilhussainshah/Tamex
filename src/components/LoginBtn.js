import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
const LoginBtn = ({ backgroundColor, marginTop, width, borderRadius, _func, name, textColor, borderColor }) => {
    return (
        <TouchableOpacity onPress={_func}
            activeOpacity={0.8}
            style={
                [styles.buttonDiv,
                {
                    borderRadius: borderRadius ? borderRadius : 10,
                    backgroundColor: backgroundColor,
                    marginTop: marginTop,
                    width: width,
                    borderColor: borderColor ? borderColor : null
                }
                ]}>
            {
                name === "Faild" &&
                <Entypo
                    name="cross"
                    style={{ fontSize: 18, color: textColor, marginRight: 5 }}
                />
            }
            {
                name === "Delivered" &&
                <Entypo
                    name="check"
                    style={{ fontSize: 18, color: textColor, marginRight: 5 }}
                />
            }
            <Text
                style={[styles.buttonText, { color: textColor }]}>{name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: "WorkSans-SemiBold",
        fontWeight: "bold",
        fontSize: 16,
        color: '#ffffff',
        letterSpacing: 1,
    },
    buttonDiv: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        borderRadius: 10
    }
});

export default LoginBtn;