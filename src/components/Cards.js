import React from "react";
import { View, StyleSheet, Text, } from 'react-native';
import Colors from '../common/Colors';

const Card = ({ _func }) => {
    return (
        <View onPress={_func} style={styles.card}>
            <Text>Hello Card</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { width: "95%", marginHorizontal: "2.5%", marginTop: 10, height: 420 },
});

export default Card;