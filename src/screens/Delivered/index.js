import Colors from "../../common/Colors";
import AppHeader from '../../components/header/AppHeader';
import Textarea from 'react-native-textarea';
import CustomInput from "../../components/CustomInput";
import DeliveredCard from "../../components/deliveredCard";
import Button from "../../components/LoginBtn";
import {
    CheckBox
} from 'native-base';
import {
    ScrollView
} from 'react-native-gesture-handler';
import React, {
    useState
} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable
} from 'react-native';
const Delivered = () => {
    const [checkBoxBolean, setcheckBoxBolean] = useState(true);
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
            <View style={{ height: 70, }}>
                <AppHeader
                    heading={"Delivered"}
                    rightIcon={true}
                    rightIconText={"Cancle"} />
            </View>
            <View style={{ flex: 8, }}>
                <ScrollView  >
                    <View style={styles.shipmentText}>
                        <Text
                            style={{ fontSize: 18 }}>Please add the last 4 digits from the{"\n"}shipment number and your security code
                         </Text>
                    </View>
                    <View style={styles.customInput}>
                        <View style={{ width: "47%", height: 60, }}>
                            <CustomInput
                                borderRadius={10}
                                placeHolder={"ID last 4 digits"}
                            />
                        </View>
                        <View style={{ width: "47%", height: 60, }}>
                            <CustomInput
                                borderRadius={10}
                                placeHolder={"Security code"}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <DeliveredCard
                            data={{ recipeint_Name: "Ali Mohamed Hasan", cordination: "120.98", }} />
                    </View>

                    <Pressable onPress={() => { setcheckBoxBolean(!checkBoxBolean) }} style={styles.checkBox}>
                        <CheckBox
                            color={"#00A075"}
                            checked={checkBoxBolean}
                            onPress={() => { setcheckBoxBolean(!checkBoxBolean) }} />
                        <Text
                            style={{ marginLeft: 20 }}>I confirmed I read the COD amount
                         </Text>
                    </Pressable>
                    <View style={styles.container}>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            maxLength={120}
                            placeholder={'Notes'}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                        <Button
                            backgroundColor={Colors.primary}
                            name={"Done"}
                            textColor={Colors.white}
                            width={"95%"} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    customInput: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        width: "95%",
        height: 80,
        marginHorizontal: "2.5%",
    },
    textareaContainer: {
        height: 180,
        borderRadius: 15,
        padding: 15,
        backgroundColor: Colors.white,
    },
    textarea: {
        textAlignVertical: 'top',
        height: 170,
        fontSize: 14,
        color: '#333',
    },
    shipmentText: {
        height: 60,
        justifyContent: "center",
        width: "95%",
        marginHorizontal: "2.5%",
    },
    container: {
        width: "95%",
        marginHorizontal: "2.5%",
        marginTop: 20
    },
    checkBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginLeft: "3%",
        height: 70,
        borderBottomColor: "white",
        borderBottomWidth: 1,
    }
});

export default Delivered;