import React from "react";
import { View, StyleSheet, Text, } from 'react-native';
import Colors from '../common/Colors';
import FastImage from 'react-native-fast-image'
import Button from "../components/button"
//icons
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Fontisto from "react-native-vector-icons/Fontisto"
import Ionicons from "react-native-vector-icons/Ionicons"

const Card = ({ _func, failed }) => {
    return (
        <View onPress={_func} style={[styles.card, { height: failed ? 470 : 420, }]}>
            <View style={styles.card_Child1_Headeing}>
                <View style={styles.card_Child1_Headeing_child1}>
                    <FastImage
                        style={{ height: 70, width: 70, }}
                        source={require("../assets/complete_without_check.png")}
                        resizeMode={FastImage.resizeMode.stretch}
                    />
                </View>
                <View style={styles.card_Child1_Headeing_child2}>
                    <View style={styles.card_Child1_Headeing_child2_Child1}>
                        <FastImage
                            style={{ height: 20, width: 20, }}
                            source={require("../assets/flag.png")}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                        <Text style={{ marginLeft: 10 }}>Delivery</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 7, justifyContent: "center", }}>
                        <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 16 }}>10294838759356</Text>
                    </View>
                </View>
            </View>
            <View style={styles.listing}>
                <View style={styles.listing_Child1}>
                    <FontAwesome name="user" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>Recipent Name</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>Ali Mohamed Hasan</Text>
                    </View>
                </View>
            </View>
            <View style={styles.listing}>
                <View style={styles.listing_Child1}>
                    <FontAwesome name="phone" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>Recipent Mobile</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>+971 5205521</Text>
                    </View>
                </View>
            </View>
            <View style={styles.listing}>
                <View style={styles.listing_Child1}>
                    <FontAwesome name="shopping-cart" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>From</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>www.amazon.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.listing}>
                <View style={styles.listing_Child1}>
                    <Fontisto name="map-marker-alt" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>Destination</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>Riyadh, Rawdia, Hassan Street Near Work Station</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.listing, {
                borderBottomWidth: failed ? 0.5 : 0,
                borderBottomColor: Colors.grey
            }]}>
                <View style={styles.listing_Child1}>
                    <Ionicons name="cash-outline" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 4, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>COD</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>120.98</Text>
                    </View>
                </View>

                <View style={styles.listing_Child1}>
                    <FontAwesome5 name="cubes" style={{ fontSize: 18, color: Colors.grey }} />
                </View>
                <View style={{ flex: 4, }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Colors.grey, marginLeft: 7 }}>Number of PC's</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 7 }}>05</Text>
                    </View>
                </View>
            </View>
            {
                failed &&
                <View style={styles.card_Footer}>
                    <Button withIcon={true} backgroundColor={Colors.white} borderColor={Colors.red} name={"Faild"} textColor={Colors.red} marginTop={12} width={160} />
                    <Button withIcon={true} backgroundColor={Colors.primary} borderColor={Colors.primary} name={"Delivered"} textColor={Colors.white} marginTop={12} width={160} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    card: { flex: 1, backgroundColor: Colors.white, width: "95%", marginHorizontal: "2.5%", marginTop: 10, borderRadius: 25, padding: 20 },
    card_Child1_Headeing: { flex: 1, flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: Colors.grey },
    card_Child1_Headeing_child1: { flex: 2.5, alignItems: "center", justifyContent: "center", },
    card_Child1_Headeing_child2: { flex: 8, },
    card_Child1_Headeing_child2_Child1: { flex: 1, flexDirection: "row", alignItems: "center", marginLeft: 7, },
    listing: { flex: 0.7, marginTop: 5, flexDirection: "row", },
    listing_Child1: { flex: 1, justifyContent: "center", alignItems: "center", },
    card_Footer: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
});

export default Card;