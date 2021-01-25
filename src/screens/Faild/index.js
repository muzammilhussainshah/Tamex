import React from 'react';
import Colors from "../../common/Colors"
import AppHeader from '../../components/header/AppHeader';
import DeliveryNumber from "../../components/DeliveryNumber"
import DropdownList from "../../components/Dropdown"
import Entypo from "react-native-vector-icons/Entypo"
import Textarea from 'react-native-textarea';
import Button from "../../components/LoginBtn"
import {
    ScrollView
} from 'react-native-gesture-handler';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
const Faild = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
            <View style={{ height: 70, }}>
                <AppHeader
                    heading={"Faild"}
                    rightIcon={true}
                    rightIconText={"Cancle"} />
            </View>
            <View style={{ flex: 8, }}>
                <ScrollView >
                    <DeliveryNumber deliveryNumber={"10294838759356"} />
                    <DropdownList heading={"Select reason"} />
                    <View style={styles.note}>
                        <Text
                            style={styles.text}>Add attachment
                        </Text>
                        <Entypo
                            name="attachment"
                            style={{ fontSize: 26, color: Colors.grey }} />
                    </View>
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
    note: {
        width: "95%",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "2.5%",
        marginTop: 20,
        height: 65,
        borderRadius: 15,
        backgroundColor: Colors.white
    },
    text: {
        fontWeight: "bold",
        color: Colors.grey,
        fontSize: 16
    },
    container: {
        marginTop: 20,
        borderRadius: 15,
        width: "95%",
        marginHorizontal: "2.5%",
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default Faild;