import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from '../common/Colors';
import Button from "../components/LoginBtn";
import { Actions } from "react-native-router-flux";
import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
const LogOut = ({ _func }) => {
    return (
        <View style={styles.logoutAbsolute}>
            <View style={styles.notification}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: "center" }}>
                    <View style={styles.exclamation}>
                        <FontAwesome5
                            name="exclamation"
                            style={{ fontSize: 35, color: Colors.white }}
                        />
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 20, color: Colors.fontClr, textAlign: "center" }}>
                        Are you sure you want to logout from this account?
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Button
                        _func={() => { Actions.LoginScreen() }}
                        name="Logout"
                        width="100%"
                        textColor={Colors.white}
                        backgroundColor={"#f5354a"} />
                </View>
                <TouchableOpacity
                    onPress={_func}
                    activeOpacity={0.8}
                    style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.cancle}> Cancle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    logoutAbsolute: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        alignItems: 'center',
        zIndex: 3,
        backgroundColor: Colors.LogOutDiv
    },
    notification: {
        height: "50%",
        borderRadius: 15,
        padding: 20,
        width: "80%",
        backgroundColor: Colors.white
    },
    exclamation: {
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.red
    },
    cancle: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0.5,
        color: Colors.secondary
    }
});
export default LogOut;