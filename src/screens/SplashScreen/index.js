import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { View, Text, StyleSheet, } from 'react-native';
import FastImage from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable';
import Colors from '../../common/Colors';

const SplashScreen = () => {
  return (
    <Text>SplashScreen</Text>
    // <View style={{ flex: 1, backgroundColor: Colors.white, }}>
    //   {/* logo absolute */}
    //   <View style={styles.logo}>
    //     <Animatable.Image
    //       animation="pulse" easing="ease-out" iterationCount="infinite"
    //       source={require("../../assets/Potato.png")}
    //       style={{ height: 48, width: 73 }} />
    //     <Text style={styles.chatToPotato}>Chat to a Potato</Text>
    //   </View>
    //   {/* logo absolute */}
    //   {/* top maskt */}
    //   <View style={{ flex: 5, }}>
    //     <FastImage
    //       style={{ height: "85%", width: "50%" }}
    //       source={require("../../assets/SplashTopMask.png")}
    //       resizeMode={FastImage.resizeMode.contain}
    //     />
    //   </View>
    //   {/* bottom maskt */}
    //   <View style={{ flex: 5, alignItems: "flex-end", justifyContent: "flex-end" }}>
    //     <FastImage
    //       style={{ height: "85%", width: "50%", }}
    //       source={require("../../assets/SplashBottomMask.png")}
    //       resizeMode={FastImage.resizeMode.contain}
    //     />
    //   </View>


    // </View>
  )
};
const styles = StyleSheet.create({
  logo: { width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center" },
  chatToPotato: { marginTop: 20, marginBottom: "20%", fontFamily: "WorkSans-Bold", fontSize: 28, fontStyle: "normal", letterSpacing: 0.71, color: Colors.fontClr },
});
const mapStateToProp = ({ root }) => ({
  // currentShop: root.currentShop,
})
const mapDispatchToProp = (dispatch) => ({
  // getCurrentBarberBooking: (currentUser, date) => {
  //   dispatch(getCurrentBarberBooking(currentUser, date));
  // },
})
export default connect(mapStateToProp, mapDispatchToProp)(SplashScreen);
