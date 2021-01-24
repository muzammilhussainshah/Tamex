import React from "react";
import { View, StyleSheet, Text, } from 'react-native';
import Colors from '../common/Colors';
//icons
import FontAwesome from "react-native-vector-icons/FontAwesome"

const DeliveredCard = ({ _func, data, }) => {
    return (
        <View
            // onPress={_func}
            style={[styles.card, { height: 160, }]}>
            <View style={styles.listing}>
                <View style={styles.listing_Child1}>
                    <FontAwesome name="user" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>Recipent Name</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>{data.recipeint_Name}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.listing}>
                <View style={styles.listing_Child1}>
                    <FontAwesome name="shopping-cart" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>COD</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>{data.cordination}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { flex: 1, backgroundColor: Colors.white, width: "95%", marginHorizontal: "2.5%", marginTop: 10, borderRadius: 25, padding: 20 },
    listing: { flex: 0.7, marginTop: 5, flexDirection: "row", },
    listing_Child1: { flex: 1, justifyContent: "center", alignItems: "center", },
    card_Footer: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
});

export default DeliveredCard;