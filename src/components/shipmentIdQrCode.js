import React from "react";
import { View, StyleSheet, Text, } from 'react-native';
import Colors from '../common/Colors';
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from "react-native-gesture-handler";

const ShipmentIdQrCode = ({ }) => {
    return (
        <View style={styles.shipmentIdQrCode}>
            <Text style={{ color: Colors.grey, fontSize: 17 }}>Shipment ID</Text>
            <TouchableOpacity>
                <FastImage
                    style={{ height: 30, width: 35, }}
                    source={require("../assets/QrCode.png")}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    shipmentIdQrCode: { height: 70, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 10, padding: "5%", width: "95%", marginHorizontal: "2.5%", backgroundColor: Colors.white },
});

export default ShipmentIdQrCode;