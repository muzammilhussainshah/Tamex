import Colors from '../../common/Colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';
import LogOut from "../LogOut";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FastImage from 'react-native-fast-image';
import { Actions } from 'react-native-router-flux';
import React, {
    useState
} from "react";
import {
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
const Data = [
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Dashbord',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Account',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Setting',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'About TamEx',
    },
];
const Item = ({ title, name }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.item, {
            height: title == "Dashbord" ? 70 : 55,
            borderColor: Colors.white,
            borderWidth: title == "Dashbord" ? 1 : 0
        }]}
        onPress={() => {
            {
                title == "Dashbord" &&
                    Actions.Home()
            }
            {
                title == "Setting" &&
                    Actions.SettingScreen()
            }
            {
                title == "Account" &&
                    Actions.ProfileScreen()

            }
            {
                title == "About TamEx" &&
                    Actions.AboutTamEx()

            }
        }} >
        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
            {title == "Dashbord" &&
                <MaterialCommunityIcons
                    name={"speedometer"}
                    style={{ color: Colors.primary, fontSize: 25 }} />
            }
            {title == "Account" &&
                <MaterialCommunityIcons
                    name="account-circle-outline"
                    style={{ color: Colors.primary, fontSize: 25 }} />
            }
            {title == "Setting" &&
                <Feather
                    name="settings"
                    style={{ color: Colors.primary, fontSize: 23 }} />
            }
            {title == "About TamEx" &&
                <AntDesign
                    name="questioncircleo"
                    style={{ color: Colors.primary, fontSize: 23 }} />
            }
        </View>
        <View style={{ flex: 7, justifyContent: "center" }}>
            <Text
                style={styles.title}>{title}
            </Text>
        </View>
        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "flex-end" }}>
            <Entypo
                name="chevron-small-right"
                style={{ color: Colors.primary, fontSize: 35 }} />
        </View>
    </TouchableOpacity>
);
const MenuBar = () => {
    const [logOuteSelected, setLogOuteSelected] = useState(false);
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        <Animatable.View
            animation="slideInLeft"
            style={{ flex: 1, flexDirection: 'row' }}>
            {logOuteSelected &&
                <LogOut _func={() => { setLogOuteSelected(!logOuteSelected) }} />
            }
            <View
                style={styles.header}>
                <View style={{ flex: 1.7, paddingHorizontal: 15 }}>
                    < FastImage
                        style={{ height: 110, width: 110 }}
                        source={require("../../assets/logo.png")}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.profileData}>
                    <View style={{ flex: 2.5, justifyContent: "center", alignItems: "center" }}>
                        < FastImage
                            style={{ height: "95%", width: "95%" }}
                            source={require("../../assets/profile.png")}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 7.5, justifyContent: "center" }}>
                        <Text
                            style={styles.userName}>Jhone Deo
                         </Text>
                        <Text
                            style={{ fontSize: 15, color: Colors.shade, paddingHorizontal: 8 }}>+20109375663
                         </Text>
                    </View>
                </View>
                <View style={{ flex: 5.2 }}>
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <TouchableOpacity style={{ flex: 1, paddingLeft: 15, flexDirection: "row" }}>
                    <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                        <AntDesign
                            name="login"
                            style={{ color: Colors.primary, fontSize: 20, transform: [{ rotateY: '180deg' }] }} />
                    </View>
                    <TouchableOpacity
                        onPress={() => { setLogOuteSelected(!logOuteSelected) }}
                        activeOpacity={0.8}
                        style={{ flex: 8.5, justifyContent: "center" }}>
                        <Text
                            style={styles.title}>Logout
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => { Actions.pop() }}
                activeOpacity={1}
                style={{ backgroundColor: Colors.transprentShade, flex: 1.5, }}>
                <TouchableOpacity
                    onPress={() => { Actions.pop() }}
                    style={{ flex: 1.7, justifyContent: "center", alignItems: "center" }}>
                    <AntDesign
                        name="close"
                        style={{ color: Colors.white, fontSize: 30 }} />
                </TouchableOpacity>
                <View style={{ flex: 8.3 }}></View>
            </TouchableOpacity>
        </Animatable.View>
    )
};
const styles = StyleSheet.create({
    heading: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: 0.51,
        color: Colors.fontClr,
    },
    lable: {
        color: Colors.primary,
        fontSize: 22,
        letterSpacing: 1,
        fontWeight: "bold"
    },
    header: {
        flex: 8.5,
        backgroundColor: Colors.bgColor,
        zIndex: 2
    },
    item: {
        backgroundColor: Colors.bgColor,
        flexDirection: "row",
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.primary,
    },
    profileData: {
        flex: 2.1,
        borderTopWidth: 1,
        borderTopColor: Colors.white,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    userName: {
        fontSize: 19,
        fontWeight: "bold",
        paddingHorizontal: 8,
        color: Colors.primary
    }
});

export default MenuBar;