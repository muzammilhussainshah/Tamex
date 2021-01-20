import React from 'react';
import AppHeader from '../components/header/AppHeader';
import AppFooter from '../components/Footer/Footer';
import {
    View,
} from 'react-native';

export default AppContainer = ({ firstImg, secondImg, children, heading }) => {
    return (
        <View style={{ flex: 1, }}>
            <AppHeader heading={heading} secondImg={secondImg} firstImg={firstImg} />
            {children}
            <AppFooter heading={heading} />
        </View>
    )
}