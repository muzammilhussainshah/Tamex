import Colors from "../../common/Colors";
import Button from "../../components/LoginBtn"
import PhoneNumber from "../../components/inputNumber";
import InputPassword from "../../components/inputPassword";
import React, {
    useState
} from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
const Login1Screen = () => {
    const [pass, setPass] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <ScrollView style={{ backgroundColor: Colors.bgColor }} >
            <View style={{ height: 100, justifyContent: "center" }}>
                <Text
                    style={styles.header}>Welcome Back!
                 </Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <PhoneNumber
                    CheckMark={true}
                    maxLength={10}
                    borderRadius={10}
                    _func={(text) => setPhoneNumber(text)}
                    placeHolder="Enter phone number"
                />
                <InputPassword
                    eyeBtn={true}
                    _func={(text) => setPass(text)}
                />
                <Button
                    name="Login"
                    textColor={Colors.white}
                    backgroundColor={Colors.primary} />
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        paddingHorizontal: 10,
        fontWeight: "bold",
        color: Colors.primary
    }
});
export default Login1Screen;