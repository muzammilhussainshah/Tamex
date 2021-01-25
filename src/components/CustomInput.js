import React, { useState } from "react";
import { TextInput } from 'react-native';
import Colors from "../common/Colors"

const CustomPickerInput = ({ borderRadius, placeHolder, _func}) => {
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
            placeholder={placeHolder}
            keyboardType={"numeric"}
        />

    );
}

export default CustomPickerInput;