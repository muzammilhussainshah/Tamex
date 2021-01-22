import React from "react";
import { TextInput } from 'react-native';
const CustomPicker = ({ maxLength, passwordShow, placeHolder, _func }) => {
  return (
    <TextInput
      style={{ fontSize: 17, paddingHorizontal: 20, }}
      maxLength={maxLength}
      onChangeText={(text) => _func(text)}
      placeholder={placeHolder}
      secureTextEntry={passwordShow == false ? true : false}
    />
  );
}
export default CustomPicker;