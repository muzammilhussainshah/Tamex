import React from 'react';
import Colors from "../../common/Colors"
import AppHeader from '../../../src/components/header/AppHeader';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import DeliveryNumber from "../../components/DeliveryNumber"
import DropdownList from "../../components/Dropdown"
import Entypo from "react-native-vector-icons/Entypo"
import Textarea from 'react-native-textarea';
import { ScrollView } from 'react-native-gesture-handler';
import Button from "../../components/button"

const Notes = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
            <View style={{ height: 70, }}>
                <AppHeader heading={"Notes"} rightIcon={true} rightIconText={"Cancle"} />
            </View>
            <View style={{ flex: 8, }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <DeliveryNumber deliveryNumber={"10294838759356"} />
                    <DropdownList heading={"Select Note Cotogray"} />
                    <View style={styles.note}>
                        <Text style={styles.text}>Upload a photo</Text>
                        <Entypo name="camera" style={{ fontSize: 26, color: Colors.grey }} />
                    </View>
                    <View style={styles.container}>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            // onChangeText={this.onChange}
                            // defaultValue={"Notes"}
                            maxLength={120}
                            placeholder={'Notes'}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                        <Button backgroundColor={Colors.primary} borderColor={Colors.primary} name={"Note as Text"} textColor={Colors.white} marginTop={0} width={"95%"} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    note: { width: "95%", padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: "2.5%", marginTop: 20, height: 65, borderRadius: 15, backgroundColor: Colors.white },
    text: { fontWeight: "bold", color: Colors.grey, fontSize: 16 },
    container: { marginTop: 20, borderRadius: 15, width: "95%", marginHorizontal: "2.5%", flex: 1, justifyContent: 'center', alignItems: 'center', },
    textareaContainer: { height: 180, borderRadius: 15, padding: 15, backgroundColor: Colors.white, },
    textarea: { textAlignVertical: 'top', height: 170, fontSize: 14, color: '#333', },
});

export default Notes;