import Entypo from "react-native-vector-icons/Entypo";
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppContainer from "../../container/AppContainer";
import Colors from '../../common/Colors';
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Switch,
  SectionList,
  TouchableOpacity
} from 'react-native';
import { Col } from "native-base";
const ProfileScreen = () => {
  return (
    <AppContainer
      msgScreen={true}
      rightIcon={true}
      drawerProps={true}
      rightIconName="edit"
      heading={"Account"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor }}>
        <View style={{ flex: 3.2, paddingHorizontal: 10 }}>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold",letterSpacing:0.3, color: Colors.primary }}>Profile Info</Text>
          </View>
          <View style={{ flex: 8, paddingVertical: 10, flexDirection: "row" }}>
            <View style={{ flex: 3.5, justifyContent: 'center', alignItems: "center" }}>
              <FastImage
                style={{ height: 90, width: 90, }}
                source={require("../../assets/profile.png")}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
            <View style={{ flex: 6.5, justifyContent: "center" }}>
              <Text style={{ fontSize: 27, fontWeight: "bold", color: Colors.primary }}>John Doe</Text>
            </View>
          </View>
        </View>
        <View style={{
          flex: 2.5,
          borderWidth: 1,
          borderColor: Colors.white, paddingHorizontal: 10
        }}>
          <View style={{ flex: 4, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>Account info</Text>
          </View>
          <View style={{ flex: 6, paddingVertical: 10 }}>
            <View style={{ flex: 5, paddingHorizontal: 25, alignItems: "center", flexDirection: "row" }}>
              <Entypo
                name="phone"
                style={{ color: Colors.fontClr, transform: [{ rotateY: '180deg' }], fontSize: 20 }}
              />
              <Text style={styles.title}>+2 0397983746</Text>

            </View>
            <View style={{ flex: 5, paddingHorizontal: 25, alignItems: "center", flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="email"
                style={{ color: Colors.fontClr, transform: [{ rotateY: '180deg' }], fontSize: 20 }}
              />
              <Text style={styles.title}>jojndoe_200@gmail.com</Text>

            </View>
          </View>

        </View>
        <View style={{
          flex: 2.5,
          borderWidth: 1,
          borderColor: Colors.white, paddingHorizontal: 10
        }}>
          <View style={{ flex: 4, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>Vehicle info</Text>
          </View>
          <View style={{ flex: 6, paddingVertical: 10 }}>
            <View style={{ flex: 5, paddingHorizontal: 25, alignItems: "center", flexDirection: "row" }}>

              <Text style={{ fontSize: 19, color: Colors.fontClr,fontWeight:"bold"}}>Type :</Text>
              <Text style={{ fontSize: 19, color: Colors.fontClr,paddingHorizontal:10}}>Van</Text>

            </View>
            <View style={{ flex: 5, paddingHorizontal: 25, alignItems: "center", flexDirection: "row" }}>

              <Text style={{  fontSize: 19, color: Colors.fontClr,fontWeight:"bold" }}>Plate number :</Text>
              <Text style={{ fontSize: 19, color: Colors.fontClr,paddingHorizontal:10 }}>2GTA123</Text>

            </View>
          </View>



        </View>
        <View style={{ flex: 1.7 }}></View>

      </View>
      {/* </Body> */}
    </AppContainer>
  )
};
const styles = StyleSheet.create({
  item: {

    // padding: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    height: 35,

    flex: 1,
    // marginVertical: 8
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

  }
});
export default ProfileScreen;