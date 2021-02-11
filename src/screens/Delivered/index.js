import Colors from "../../common/Colors";
import AppHeader from '../../components/header/AppHeader';
import Textarea from 'react-native-textarea';
import { connect } from 'react-redux';
import { _tasklist, _taskdelivered } from "../../store/action/action";
import GetLocation from 'react-native-get-location'
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
    useState, useEffect
} from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    Pressable
} from 'react-native';
const Delivered = ({ taskId, _taskdelivered, isLoader, isError, currentUser, _tasklist, }) => {
    const [checkBoxBolean, setcheckBoxBolean] = useState(true);
    console.log(taskId)
    const [taskIdh, setTaskIdh] = useState(taskId)
    const [lati, setlati] = useState('')
    const [long, setlong] = useState('')

    const [textArea, setTextArea] = useState('')
    const [location, setLocation] = useState('')
    const [loading, setloading] = useState('')
    const [securityCode, setSecurityCode] = useState('')
    const [lastDigit, setLastDigits] = useState('')

    //  tasklist[0].vtask_id
    // console.log(taskId)
    useEffect(() => {
        _tasklist(currentUser)
        _requestLocation()
        // _taskdelivered()
    }, [])

    const _requestLocation = () => {
        // this.setState({ loading: true, location: null });
        setLocation(null)
        setloading(true)
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                setLocation(location)
                setloading(false)
                setlati(location.latitude)
                setlong(location.longitude)
                // console.log(location.longitude)
                // console.log(lati,"lati")
                // console.log(long,"long")
            })
            .catch(ex => {
                const { code, message } = ex;
                // console.warn(code, message);
                if (code === 'CANCELLED') {
                    Alert.alert('Location cancelled by user or by another request');
                }
                if (code === 'UNAVAILABLE') {
                    Alert.alert('Location service is disabled or unavailable');
                }
                if (code === 'TIMEOUT') {
                    Alert.alert('Location request timed out');
                }
                if (code === 'UNAUTHORIZED') {
                    Alert.alert('Authorization denied');
                }
                setLocation(null)
                setloading(false)
            });
    }
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
                                _func={(text) => setLastDigits(text)}
                                maxLength={4}
                                borderRadius={10}
                                placeHolder={"ID last 4 digits"}
                            />
                        </View>
                        <View style={{ width: "47%", height: 60, }}>
                            <CustomInput
                                _func={(text) => setSecurityCode(text)}

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
                            onChangeText={(text) => setTextArea(text)}
                            placeholder={'Notes'}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>


                        {isLoader ?
                            <ActivityIndicator
                                style={{ marginTop: "10%" }}
                                size="small" color={Colors.primary}
                            /> :

                            <Button
                                _func={() => _taskdelivered(lati, long, taskIdh, textArea, securityCode, currentUser, lastDigit)}
                                backgroundColor={Colors.primary}
                                name={"Done"}
                                textColor={Colors.white}
                                width={"95%"} />}
                        {isError !== "" &&
                            <Text
                                style={{ color: "red", fontSize: 15, alignSelf: "center" }}>{isError}
                            </Text>}
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
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    isLoader: root.isLoader,
    isError: root.isError,
    tasklist: root.tasklist,
})
const mapDispatchToProp = (dispatch) => ({
    _tasklist: (currentUser) => {
        dispatch(_tasklist(currentUser));
    },
    _taskdelivered: (lati, long, taskIdh, textArea, securityCode, currentUser, lastDigit) => {
        dispatch(_taskdelivered(lati, long, taskIdh, textArea, securityCode, currentUser, lastDigit));
    },

})

export default connect(mapStateToProp, mapDispatchToProp)(Delivered);
