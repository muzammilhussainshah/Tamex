import React from "react";
import Colors from '../../common/Colors';
import Feather from "react-native-vector-icons/Feather"

import Ionicons from "react-native-vector-icons/Ionicons"
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const AppHeader = ({ heading, rightIcon, rightIconName, rightIconText }) => {
    return (
        <View
            style={styles.header}>
            <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} >
                <Ionicons
                    name="menu-outline"
                    style={{ color: Colors.primary, fontSize: 25 }}
                />
            </TouchableOpacity>
            <View style={{ flex: rightIcon ? 7.5 : 9, justifyContent: "center" }}>
                <Text style={styles.lable}>{heading}</Text>
            </View>
            {
                rightIcon && rightIconText &&
                <TouchableOpacity onPress={() => { Actions.pop() }} style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: "center", }} >
                    <Text style={{ color: "black", }}>{rightIconText}</Text>
                </TouchableOpacity>
            }
            {rightIcon && rightIconName &&
                <TouchableOpacity style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: "center", }} >
                    <Feather
                        name={rightIconName}
                        style={{ color: Colors.primary, fontSize: 22 }}
                    />
                </TouchableOpacity>
            }

        </View>
    )
};
const styles = StyleSheet.create({
    heading: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: 0.51,
        color: Colors.fontClr,
    },
    lable: {
        color: Colors.primary,
        fontSize: 22,
        letterSpacing: 1,
        fontWeight: "bold"
    },
    header: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.bgColor,
        zIndex: 2,
        paddingHorizontal: 10
    }
});

export default AppHeader;