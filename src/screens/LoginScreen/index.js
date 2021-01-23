import Colors from "../../common/Colors";
import Button from "../../components/LoginBtn";
import FastImage from 'react-native-fast-image';
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
const LoginScreen = () => {
    const [pass, setPass] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <ScrollView style={{ backgroundColor: Colors.bgColor }} >
            <View style={{ height: 250, alignItems: 'center' }}>
                < FastImage
                    style={{ height: 350, width: 350, marginTop: 30 }}
                    source={require("../../assets/girl.png")}
                    resizeMode="contain"
                />
            </View>
            <View style={{ height: 100, justifyContent: "center", backgroundColor: Colors.bgColor }}>
                <Text
                    style={styles.header}>Welcome back!
                 </Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <PhoneNumber
                    maxLength={10}
                    borderRadius={10}
                    placeholderTextColor={Colors.grey}
                    _func={(text) => setPhoneNumber(text)}
                    placeHolder="Phone number"
                />
                <InputPassword
                    placeholderTextColor={Colors.grey}
                    _func={(text) => setPass(text)}
                />
                <Button
                    name="Login"
                    textColor={Colors.white}
                    backgroundColor={Colors.shade} />
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
    }
});
export default LoginScreen;