import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import Colors from '../common/Colors';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({ heading }) => {
    const [country, setCountry] = useState("");
    console.log(country)
    return (
        <View style={styles.dd}>
            {/* <View style={styles.container}> */}
            <Picker
                mode= "dropdown" 
                selectedValue={country}
                style={{ height: "100%", width: "100%" }}
                onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            {/* </View> */}

            {/* <DropDownPicker
                items={[
                    { label: 'UK', value: 'uk' },
                    { label: 'France', value: 'france' },
                ]}
                defaultValue={country}
                placeholder={heading}
                placeholderStyle={{ color: Colors.grey, fontWeight: "bold", fontSize: 16 }}
                containerStyle={{ height: 50, width: "100%", }}
                style={{ borderColor: "white", }}
                itemStyle={{ justifyContent: 'flex-start', }}
                onChangeItem={item => setCountry(item.value)}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    dd: { flexDirection: "row", zIndex: 10, justifyContent: "center", alignItems: "center", marginTop: 20, width: "95%", height: 65, marginHorizontal: "2.5%", borderRadius: 15, backgroundColor: Colors.white },
});

export default Dropdown;