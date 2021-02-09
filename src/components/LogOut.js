import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from '../common/Colors';
import Button from "../components/LoginBtn";
import { connect } from 'react-redux';
import { _logout } from "../store/action/action";
import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
const LogOut = ({isError, isLoader,_func, _logout,currentUser }) => {
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

                    {isLoader ?
                        <ActivityIndicator
                            style={{ marginTop: "10%" }}
                            size="small" color={Colors.primary}
                        /> :
                        <Button
                            // _func={() => { Actions.LoginScreen() }}
                            _func={() => { _logout(currentUser) }}
                            name="Logout"
                            width="100%"
                            textColor={Colors.white}
                            backgroundColor={"#f5354a"} />
                    }
                    {isError !== "" &&
                        <Text
                            style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                        </Text>}
                </View>
                <TouchableOpacity
                    onPress={_func}
                    activeOpacity={0.8}
                    style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.cancle}> Cancel</Text>
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

const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    isLoader: root.isLoader,
    isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
    _logout: (currentUser) => {
        dispatch(_logout(currentUser));
    },
})


export default connect(mapStateToProp, mapDispatchToProp)(LogOut);