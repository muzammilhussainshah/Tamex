import React  from "react";
import { TextInput } from 'react-native';
const CustomPicker = ({ maxLength, passwordShow,placeholderTextColor, SignInScreen, placeHolder, _func, _bdrWidth }) => { 
  return (
    <TextInput
      style={{ fontSize: 17, paddingHorizontal: 20, }}
      maxLength={maxLength}
      onChangeText={(text) => _func(text)}
      placeholder={placeHolder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={passwordShow == false ? true : false}
    />
     

  );
}

export default CustomPicker;