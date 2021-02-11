
import Colors from "../../common/Colors"
import { connect } from 'react-redux';
import AppHeader from '../../components/header/AppHeader';
import DeliveryNumber from "../../components/DeliveryNumber"
import GetLocation from 'react-native-get-location';
import DropdownList from "../../components/Dropdown";
import { _taskFailed, _requestLocation } from "../../store/action/action";
import Entypo from "react-native-vector-icons/Entypo";
import Textarea from 'react-native-textarea';
import Button from "../../components/LoginBtn";
import {
    ScrollView
} from 'react-native-gesture-handler';

import React, {
    useState, useEffect
} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
const Faild = ({ taskId, _taskFailed, isLoader, isError, currentUser, _tasklist, }) => {
    const [taskIdh, setTaskIdh] = useState(taskId) 
    const [lati, setlati] = useState('')
    const [long, setlong] = useState('')
    const [textArea, setTextArea] = useState('')
    const [location, setLocation] = useState('')
    const [loading, setloading] = useState('')
    useEffect(() => {
        // _tasklist(currentUser)
        _requestLocation()
        // _taskdelivered()
    }, [])
    // const [textArea, setTextArea] = useState('')
    // const [securityCode, setSecurityCode] = useState('')
    // const [lastDigit, setLastDigits] = useState('')

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
                    heading={"Faild"}
                    rightIcon={true}
                    rightIconText={"Cancle"} />
            </View>
            <View style={{ flex: 8, }}>
                <ScrollView >
                    <DeliveryNumber deliveryNumber={taskId} />
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
                            onChangeText={(text) => setTextArea(text)}
                            placeholder={'Notes'}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                        <Button
                            _func={() => _taskFailed(lati, long,textArea, taskIdh, currentUser)}

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
    _taskFailed: (lati, long, taskIdh,textArea, currentUser) => {
        dispatch(_taskFailed(lati, long, taskIdh,textArea, currentUser));
    },

})

export default connect(mapStateToProp, mapDispatchToProp)(Faild);
