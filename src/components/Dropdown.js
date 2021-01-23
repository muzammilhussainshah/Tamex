import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import Colors from '../common/Colors';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({ }) => {
    const [country, setCountry] = useState("");
    return (
        <View style={styles.dd}>
            <DropDownPicker
                items={[
                    { label: 'UK', value: 'uk' },
                    { label: 'France', value: 'france' },
                ]}
                defaultValue={country}
                placeholder={'Select Note Cotogray'}
                placeholderStyle={{ color: Colors.grey, fontWeight: "bold", fontSize: 16 }}
                containerStyle={{ height: 50, width: "100%", }}
                style={{ borderColor: "white", }}
                itemStyle={{ justifyContent: 'flex-start', }}
                onChangeItem={item => setCountry({ country: item.value })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dd: { flexDirection: "row", zIndex: 10, justifyContent: "center", alignItems: "center", marginTop: 20, width: "95%", height: 65, marginHorizontal: "2.5%", borderRadius: 15, backgroundColor: Colors.white },
});

export default Dropdown;