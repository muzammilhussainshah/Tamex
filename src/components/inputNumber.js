import FastImage from 'react-native-fast-image';
import Ionicons from "react-native-vector-icons/Ionicons";
import CountryCodePicker from './CountryCodePicker';
import Colors from "../common/Colors";
import React from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

const PhoneNumber = ({imgPath,dialCode, CheckMark, placeholderTextColor, maxLength, passwordShow, placeHolder, _func }) => {
  return (
    <>
     
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
    </ >
  );
}
const styles = StyleSheet.create({
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