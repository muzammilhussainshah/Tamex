import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../../common/Colors"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style'
import {
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
export default FooterTab = ({ id,
    title,
    iconName,
    color,
    func }) => {
    const tabicon = (iconName) => {
        if (iconName === "home")
            return <MaterialCommunityIcons name={"clipboard-check-outline"} size={30} style={{ color: Colors.shade }} />
        else if (iconName === "inbox")
            return <MaterialCommunityIcons name={"format-list-checkbox"} size={30} style={{ color: Colors.shade }} />
        else if (iconName === "profile")
            return <FontAwesome name={"user-o"} size={25} style={{ color: Colors.shade }} />

        else return <MaterialCommunityIcons name={"speedometer"} size={30} style={{ color: Colors.secondary }} />
    }
    return (
        <TouchableOpacity onPress={() => func(id)}
            style={styles.footerTabs}>
            {tabicon(iconName)}
            {/* <Text style={{ fontSize: 12, color: color }}>{title}</Text> */}
        </TouchableOpacity>
    )
}
