import Entypo from "react-native-vector-icons/Entypo";
import FastImage from 'react-native-fast-image';
import AppContainer from "../../container/AppContainer";
import { connect } from "react-redux";
import Colors from '../../common/Colors';
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
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
const Item = ({ title ,phoneNmber}) => (
  <View style={styles.item}>
    <View style={{ height: 50, width: "70%", justifyContent: "center" }}>
      <Text
        style={{ fontSize: 19, letterSpacing: 0.2, color: Colors.fontClr }}>+{phoneNmber}
      </Text>
    </View>
    <View style={{ height: 50, width: "30%", justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={styles.calls}>
        <Entypo
          name="phone"
          style={{ color: Colors.white, transform: [{ rotateY: '180deg' }], fontSize: 15 }}
        />
        <Text
          style={{ fontSize: 17, marginHorizontal: 2, color: Colors.white }}>Call
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
const AboutTamEx = ({ aboutus }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} phoneNmber={aboutus.Phone} />
  );
  console.log(aboutus)
  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"About us"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor, paddingHorizontal: 10 }}>
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <FastImage
            style={{ height: "65%", width: "65%", }}
            source={require("../../assets/logo.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={{ flex: 2.5 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>About us
           </Text>
          <Text
            style={styles.dummyText}>{aboutus.Description.replace(/\s+/g, " ")
            }
          </Text>
        </View>
        <View style={{ flex: 5.5 }}>
          <Text
            style={styles.customers}>Customer Care number
           </Text>
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
    marginVertical: 3,
  },
  title: {
    fontSize: 32,
  },
  calls: {
    height: "80%",
    width: "65%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: Colors.secondary
  },
  dummyText: {
    fontSize: 19,
    width: "98%",
    textAlign: 'justify',
    letterSpacing: 0.2,
    color: Colors.fontClr
  },
  customers: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    color: Colors.primary
  }

});
const mapStateToProp = ({ root }) => ({
  aboutus: root.aboutus,
})
const mapDispatchToProp = (dispatch) => ({
  _logout: (currentUser) => {
    dispatch(_logout(currentUser));
  },
})
export default connect(mapStateToProp, mapDispatchToProp)(AboutTamEx);
