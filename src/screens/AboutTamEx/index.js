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
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Col } from "native-base";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '+2010366479',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '+2010366479',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '+2010366479',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={{ height: 50, width: "70%", justifyContent: "center" }}>
      <Text style={{ fontSize: 19, letterSpacing: 0.2, color: Colors.fontClr }}>{title}</Text>
    </View>
    <View style={{ height: 50, width: "30%", justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={{ height: "80%", width: "65%", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 15, backgroundColor: Colors.secondary }}>
        <Entypo
          name="phone"
          style={{ color: Colors.white, transform: [{ rotateY: '180deg' }], fontSize: 15 }}
        />
        <Text style={{ fontSize: 17, marginHorizontal: 2, color: Colors.white }}>Call</Text>

      </TouchableOpacity>
    </View>
    {/* <Text style={styles.title}>{title}</Text> */}
  </View>
);
const AboutTamEx = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"About us"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor, paddingHorizontal: 10 }}>
        <View style={{ flex: 2.5, justifyContent: "center", alignItems: "center" }}>
          <FastImage
            style={{ height: "65%", width: "65%", }}
            source={require("../../assets/logo.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={{ flex: 2.7, justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>About us</Text>
          <Text style={{ fontSize: 19, width: "98%", textAlign: 'justify', letterSpacing: 0.2, color: Colors.fontClr }}>TamEx is an International Limit company, one of the fastest growing companies in the transport and parcel delivery sector.</Text>

        </View>
        <View style={{ flex: 4.8 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>Customer Care number</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      {/* </Body> */}
    </AppContainer>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
  },
});
export default AboutTamEx;