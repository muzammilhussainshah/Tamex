import React from "react";
import Button from '../../components/LoginBtn';
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../common/Colors";
import ImageSlider from 'react-native-image-slider';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
const slides = [
    {
        key: 1,
        image: require('../../assets/walk1.png'),
        image2: require('../../assets/walk1.png'),
        txt1: "Walk1",
        txt2: "Walk1",
    },
    {
        key: 2,
        image: require('../../assets/walk2.png'),
        image2: require('../../assets/walk2.png'),
        txt1: "Walk2",
        txt2: "Walk2",
    },
    {
        key: 3,
        image: require('../../assets/walk3.png'),
        image2: require('../../assets/walk3.png'),
        txt1: "Walk3",
        txt2: "Walk3",
        loginBtn: true,
    },
];
export default WalkThrough = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
            <View style={{ flex: 1.5, flexDirection: "row", justifyContent: "center" }}>
                <Image
                    style={{ height: 130, width: 130 }}
                    source={require("../../assets/logo.png")}
                    resizeMode={"contain"}
                />
            </View>
            <View style={{ flex: 8.5 }}>
                <ImageSlider
                    style={{ backgroundColor: 'none', }}
                    loop
                    autoPlayWithInterval={3000}
                    images={slides}
                    customSlide={({ index, item, style, width }) => {
                        return (
                            <View
                                key={index}
                                style={[style, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
                                <View style={styles.imgText}>
                                    <Text
                                        style={{ textAlign: "center", fontSize: 20, width: "70%" }}>A quick,brown fox jumps over the lazy dog
                                    </Text>
                                </View>
                                <Image
                                    style={{ height: 640, width: "100%", }}
                                    resizeMode="stretch"
                                    source={item.image}
                                />
                            </View>
                        )
                    }}
                    customButtons={(position) => {
                        return (
                            <View style={styles.btn}>
                                {position == 2 ?
                                    <Button
                                        width={200}
                                        borderRadius={20}
                                        name="Login"
                                        textColor={Colors.white}
                                        backgroundColor={Colors.primary} />
                                    :
                                    <TouchableOpacity style={styles.arrowBtn}>
                                        <AntDesign
                                            name="arrowright"
                                            style={{ fontSize: 25, color: Colors.white }}
                                        />
                                    </TouchableOpacity>
                                }
                                {position == 2 ? null :
                                    <TouchableOpacity style={{ flex: 1, marginVertical: 10 }}>
                                        <Text
                                            style={{ color: Colors.secondary, fontSize: 17, fontWeight: "bold" }}>Skip
                                    </Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    }} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    imgText: {
        height: "100%",
        width: "100%",
        zIndex: 2,
        position: 'absolute',
        alignItems: "center",
        paddingVertical: 60,
        justifyContent: "flex-end"
    },
    btn: {
        alignItems: "center",
        height: 140, width: "100%"
    },
    arrowBtn: {
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary
    }
});