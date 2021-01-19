import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../common/Colors'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    footerContainer: {
        flex:1.1,
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        borderTopColor: Colors.primary,
        borderTopWidth: .5,
    },
    footerTabs: {
        width: screenWidth / 4,
        justifyContent: "center",
        alignItems: "center"
    },
});