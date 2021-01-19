import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, } from 'react-native';
import AppHeader from '../components/header/AppHeader';
import AppFooter from '../components/Footer/Footer';
const screenHeight = Dimensions.get('window').height - 24;

export default AppContainer = ({ firstImg, secondImg, children, heading }) => {
    return (
        <View style={{ flex: 1, }}>
            <AppHeader heading={heading} secondImg={secondImg} firstImg={firstImg} />
            {children}
            <AppFooter heading={heading} />
        </View>
    )
}