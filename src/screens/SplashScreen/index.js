import React from 'react'
import FastImage from 'react-native-fast-image'
import Colors from '../../common/Colors';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
const SplashScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1.5 }}></View>
      <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
        < FastImage
          style={{ height: 180, width: 180, }}
          source={require("../../assets/logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.footerDiv}>
        <Text
          style={{ fontSize: 17, margin: 2, color: Colors.secondaryFont }}>Developed by
          </Text>
        <Text
          style={{ fontSize: 20, margin: 2, fontWeight: "bold" }}>AWDIA
        </Text>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  footerDiv: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SplashScreen;
