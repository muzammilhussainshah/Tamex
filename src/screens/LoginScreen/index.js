import Colors from "../../common/Colors";
import Button from "../../components/LoginBtn";
import FastImage from 'react-native-fast-image';
import PhoneNumber from "../../components/inputNumber";
import InputPassword from "../../components/inputPassword";
import CountryCodePicker from '../../components/CountryCodePicker';
import { connect } from 'react-redux';
import { _login } from "../../store/action/action";
import React, {
    useState, useEffect
} from "react";
import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    ScrollView,
} from 'react-native';

const LoginScreen = ({ imgPath, dialCode,isLoader,isError, _login }) => {
    const [dialCodeState, setdialCodeState] = useState('1');
    const [password, setPass] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    useEffect(() => {
        dialCode && setdialCodeState(dialCode)
    }, [])
    return (
        <ScrollView style={{ backgroundColor: Colors.bgColor }} >
            <View style={{ height: 270, alignItems: 'center' }}>
                < FastImage
                    style={{ height: 270, width: 270, marginTop: 12 }}
                    source={require("../../assets/gilr.png")}
                    resizeMode="contain"
                />
            </View>
            <View style={{ height: 100, justifyContent: "center", backgroundColor: Colors.bgColor }}>
                <Text
                    style={styles.header}>Welcome back!
                 </Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={styles.mainView}>
                    <View style={styles.country}>
                        <CountryCodePicker imgPath={imgPath} dialCode={dialCode} />
                    </View>
                    <PhoneNumber
                        imgPath={imgPath}
                        dialCode={dialCode}
                        maxLength={10}
                        borderRadius={10}
                        placeholderTextColor={Colors.grey}
                        _func={(text) => setPhoneNumber(text)}
                        placeHolder="Phone number"
                    />

                </View>
                <InputPassword
                    placeholderTextColor={Colors.grey}
                    _func={(text) => setPass(text)}
                />


                {isLoader ?
                    <ActivityIndicator
                        style={{ marginTop: "10%" }}
                        size="small" color={Colors.primary}
                    /> :
                    <Button
                        _func={() => _login(phoneNumber, password, dialCodeState)}
                        name="Login"
                        textColor={Colors.white}
                        backgroundColor={Colors.shade} />
                }
                {isError !== "" &&
                    <Text
                        style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                    </Text>}

            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        paddingHorizontal: 10,
        fontWeight: "bold",
        color: Colors.primary
    },
    mainView: {
        height: 70,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"center",
        width: "100%",
        backgroundColor: Colors.white
    },
    country: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
    },
});

const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    isLoader: root.isLoader,
    isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
    _login: (phoneNumber, password, dialCodeState) => {
        dispatch(_login(phoneNumber, password, dialCodeState));
    },
})

export default connect(mapStateToProp, mapDispatchToProp)(LoginScreen);
