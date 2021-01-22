
import Ionicons from "react-native-vector-icons/Ionicons";
import InputForms from "../components/input"
import Colors from "../common/Colors"
import React, {
    useState
} from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
const PhoneNumber = ({ eyeBtn, _func }) => {
    const [passwordShow, setPasswordShow] = useState(false);
    return (
        <View style={styles.passwordDiv}>
            <View style={styles.inputFieldPass}>
                <View style={{ width: eyeBtn ? "90%" : "100%" }}>
                    <InputForms
                        placeHolder="Password"
                        passwordShow={passwordShow}
                        _func={_func}
                    />
                </View>
                {eyeBtn &&
                    <View style={{ width: "10%" }}>
                        {passwordShow ?
                            <TouchableOpacity onPress={() => { setPasswordShow(false) }}>
                                <Ionicons
                                    name="eye-outline"
                                    style={{ color: Colors.fontClr, fontSize: 15 }}
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { setPasswordShow(true) }}>
                                <Ionicons
                                    name="ios-eye-off-outline"
                                    style={{ color: Colors.fontClr, fontSize: 15 }}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    passwordDiv: {
        height: 70,
        marginVertical: 10,
        borderRadius: 15,
        flexDirection: "row",
        width: "100%",
        backgroundColor: Colors.white,
    },
    inputFieldPass: {
        flexDirection: "row",
        alignItems: "center",
    },
});
export default PhoneNumber;