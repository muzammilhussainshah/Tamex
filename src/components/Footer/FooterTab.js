import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style'
import {
    TouchableOpacity,
} from 'react-native'
export default FooterTab = ({ id,
    iconName,
    color,
    func }) => {
    const tabicon = (iconName) => {
        if (iconName === "home")
            return <MaterialCommunityIcons name={"speedometer"} size={30} style={{ color: color }} />
        else if (iconName === "inbox")
            return <MaterialCommunityIcons name={"format-list-checkbox"} size={30} style={{ color: color }} />
        else if (iconName === "profile")
            return <FontAwesome name={"user-o"} size={25} style={{ color: color }} />
        else return <MaterialCommunityIcons name={"clipboard-check-outline"} size={30} style={{ color: color }} />

    }
    return (
        <TouchableOpacity onPress={() => func(id)}
            style={styles.footerTabs}>
            {tabicon(iconName)}
        </TouchableOpacity>
    )
}
