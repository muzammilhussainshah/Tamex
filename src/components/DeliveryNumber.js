import React from "react";
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../common/Colors';
import FastImage from 'react-native-fast-image'

const DeliveryNumber = ({ deliveryNumber }) => {
    return (
        <View style={styles.deliveryNumberHeading}>
            <View style={styles.deliveryNumberHeading_Child}>
                <FastImage
                    style={{ height: 50, width: 50, }}
                    source={require("../assets/deliveryBox.png")}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={styles.deliveryNumberHeading_Child1}>
                <Text style={styles.deliveryNumberText}>{deliveryNumber}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    deliveryNumberHeading: { flexDirection: "row", width: "95%", height: 65, marginHorizontal: "2.5%", borderRadius: 15, backgroundColor: Colors.primary },
    deliveryNumberHeading_Child: { flex: 3, justifyContent: "center", alignItems: "center", },
    deliveryNumberHeading_Child1: { flex: 8, justifyContent: "center", },
    deliveryNumberText: { color: "white", fontWeight: "bold" }
});

export default DeliveryNumber;