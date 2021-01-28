import React from 'react';
import AppHeader from '../components/header/AppHeader';
import AppFooter from '../components/Footer/Footer';
import {
    View,
} from 'react-native';

export default AppContainer = ({ firstImg, secondImg,rightIcon, children, heading ,rightIconName}) => {
    return (
        <View style={{ flex: 1, }}>
            <AppHeader heading={heading} secondImg={secondImg} rightIcon={rightIcon} firstImg={firstImg} rightIconName={rightIconName} />
            {children}
            <AppFooter heading={heading} />
        </View>
    )
}