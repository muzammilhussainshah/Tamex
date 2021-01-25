import FastImage from 'react-native-fast-image';
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../common/Colors";
import React from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Col } from 'native-base';
const PhoneNumber = ({ CheckMark, placeholderTextColor, maxLength, passwordShow, placeHolder, _func }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.country}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          < FastImage
            style={{ height: 20, width: 20, }}
            source={require("../assets/numberIcon.png")}
            resizeMode="contain"
          />
          <Text
            style={{ fontWeight: "bold", fontSize: 15, color: Colors.primaryFont }}> + 2
            </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: CheckMark ? 6.5 : 8 }}>
        <TextInput
          style={{ fontSize: 17, paddingHorizontal: 15, }}
          maxLength={maxLength}
          onChangeText={(text) => _func(text)}
          keyboardType="numeric"
          placeholderTextColor={placeholderTextColor}
          placeholder={placeHolder}
          secureTextEntry={passwordShow == false ? true : false}
        />
      </View>
      {CheckMark &&

        < View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.CheckMark}>
            <Ionicons
              name="checkmark-sharp"
              style={{ fontSize: 17, color: Colors.white }} />
          </TouchableOpacity>
        </View>
      }
    </View >
  );
}
const styles = StyleSheet.create({
  mainView: {
    height: 70,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"center",
    width: "100%",
    backgroundColor: Colors.white
  },
  country: {
    flex: 2,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  CheckMark: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default PhoneNumber;