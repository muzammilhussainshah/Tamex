import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../../components/LoginBtn"
import Colors from '../../common/Colors';
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
const EditProfileScreen = () => {
  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      rightIcon={true}
      rightIconText="Cancel"
      heading={"Account"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor }}>
        <View style={{ flex: 3.2, paddingHorizontal: 10 }}>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text
              style={styles.profileInfo}>Profile Info
             </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.profilePic}>
              <FastImage
                style={{ height: 90, width: 90, }}
                source={require("../../assets/profile.png")}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <TouchableOpacity style={styles.absolutedWork}>
                <TouchableOpacity style={styles.plusSign}>
                  <FontAwesome5
                    name="plus"
                    style={{ color: Colors.white, transform: [{ rotateY: '180deg' }], fontSize: 20 }}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View style={styles.userNameView}>
              <Text
                style={{ fontSize: 27, fontWeight: "bold", color: Colors.primary }}>John Doe
              </Text>
            </View>
          </View>
        </View>
        <View style={{
          flex: 2.5,
          paddingHorizontal: 10
        }}>
          <View style={{ flex: 4, justifyContent: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>Account info
             </Text>
          </View>
          <View style={styles.AccountView}>
            <View style={styles.AccountView2}>
              <Entypo
                name="phone"
                style={{ color: Colors.fontClr, transform: [{ rotateY: '180deg' }], fontSize: 20 }}
              />
              <Text
                style={styles.title}>+2 0397983746
              </Text>
            </View>
            <View style={{ flex: 0.1, alignItems: "center" }}>
              <View style={{ borderTopWidth: 0.5, width: "86%", borderTopColor: Colors.shade }}>
              </View>
            </View>
            <View style={styles.email}>
              <MaterialCommunityIcons
                name="email"
                style={{ color: Colors.fontClr, transform: [{ rotateY: '180deg' }], fontSize: 20 }}
              />
              <Text
                style={styles.title}>jojndoe_200@gmail.com
              </Text>
            </View>
          </View>

        </View>
        <View style={{
          flex: 2.5,
          paddingHorizontal: 10
        }}>
          <View style={{ flex: 4, justifyContent: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>Vehicle info
            </Text>
          </View>
          <View style={styles.vehicleView}>
            <View style={styles.vehicleView2}>
              <Text style={{ fontSize: 19, color: Colors.fontClr, fontWeight: "bold" }}>Type :
              </Text>
              <Text style={{ fontSize: 19, color: Colors.fontClr, paddingHorizontal: 10 }}>Van
              </Text>
            </View>
            <View style={{ flex: 0.1, alignItems: "center" }}>
              <View style={{ borderTopWidth: 0.5, width: "86%", borderTopColor: Colors.shade }}>
              </View>
            </View>
            <View style={styles.vehicleView3}>
              <Text style={{ fontSize: 19, color: Colors.fontClr, fontWeight: "bold" }}>Plate number :
              </Text>
              <Text style={{ fontSize: 19, color: Colors.fontClr, paddingHorizontal: 10 }}>2GTA123
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1.7, alignItems: "center" }}>
          <Button
            name="Save"
            width="95%"
            textColor={Colors.white}
            backgroundColor={Colors.primary} />
        </View>
      </View>
      {/* </Body> */}
    </AppContainer>
  )
};
const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    height: 35,
    flex: 1,
  }, header: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: Colors.primary
  },
  title: {
    paddingHorizontal: 15,
    fontSize: 19,
    color: Colors.fontClr
  },
  profileInfo: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: Colors.primary
  },
  body: {
    flex: 8,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  profilePic: {
    flex: 3.5,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: "center"
  },
  absolutedWork: {
    height: 90,
    width: 90,
    borderRadius: 45,
    position: "absolute",
    zIndex: 2
  },
  userNameView: {
    flex: 6.5,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  plusSign: {
    height: "100%",
    borderRadius: 45,
    width: '100%',
    backgroundColor: Colors.transprentShade,
    justifyContent: "center",
    alignItems: "center"
  },
  AccountView: {
    flex: 6,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10
  },
  AccountView2: {
    flex: 4.8,
    paddingHorizontal: 25,
    alignItems: "center",
    flexDirection: "row"
  },
  email: {
    flex: 4.9,
    paddingHorizontal: 25,
    alignItems: "center",
    flexDirection: "row"
  },
  vehicleView: {
    flex: 6,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10
  },
  vehicleView2: {
    flex: 4.9,
    paddingHorizontal: 25,
    alignItems: "center",
    flexDirection: "row"
  },
  vehicleView3: {
    flex: 5,
    paddingHorizontal: 25,
    alignItems: "center",
    flexDirection: "row"
  },
});
export default EditProfileScreen;