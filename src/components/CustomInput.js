import React, { useState } from "react";
import { TextInput } from 'react-native';
import Colors from "../common/Colors"

const CustomPickerInput = ({ borderRadius, placeHolder,maxLength, _func}) => {
    return (
        <TextInput
            style={{
                height: 60,
                fontSize: 16,
                backgroundColor: Colors.white,
                padding: 15,
                borderRadius: borderRadius
            }}
            onChangeText={(text) => _func(text)}
            // value={form}
            maxLength={maxLength}
            placeholder={placeHolder}
            keyboardType={"numeric"}
        />

    );
}

export default CustomPickerInput;