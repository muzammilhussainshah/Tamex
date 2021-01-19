import React, { useState } from "react";
import { connect } from 'react-redux';
import AppContainer from '../../container/AppContainer';
import { Text, View } from 'react-native';
import Colors from "../../common/Colors"

const Home = ({ freePotatoes }) => {
  return (
    <AppContainer msgScreen={true} drawerProps={true} heading={"Chat to a Potato"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor, padding: 10 }}>

        <View style={{ flex: 5.6 }}>
          <View style={{ position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "80%" }}>
            <View style={{ height: 300, width: 300, borderRadius: 150, borderColor: Colors.white, borderWidth: 2, justifyContent: 'center', alignItems: "center" }}>
              <View style={{ height: 250, width: 250, borderRadius: 125, borderColor: Colors.white, borderWidth: 2, justifyContent: 'center', alignItems: "center" }}>
                <View style={{ height: 200, width: 200, borderRadius: 100, borderColor: Colors.white, borderWidth: 2, justifyContent: 'center', alignItems: "center" }}>
                  <View style={{ height: 200, width: 200, borderRadius: 100, borderColor: Colors.white, borderWidth: 2, justifyContent: 'center', alignItems: "center" }}>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 3.4 }}>
          </View>
          <View style={{ flex: 2.2, backgroundColor: 'blue' }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.primary }}>Shipments</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 5 ,backgroundColor:"pink"}}></View>
              <View style={{ flex: 5,backgroundColor:'blue' }}></View>

            </View>

          </View>
        </View>
        <View style={{ flex: 2.2, backgroundColor: "yellow" }}></View>
        <View style={{ flex: 2.2, backgroundColor: "green" }}></View>
      </View>
    </AppContainer>
  )
};
export default Home;