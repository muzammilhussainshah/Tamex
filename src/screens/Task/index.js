import React, { useState } from 'react';
import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors"
import {
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import ShipmentIdQrCode from "../../components/shipmentIdQrCode"
import Card from "../../components/Cards"

const Task = () => {
  let DATA = [
    {
      recipeint_Name: "Ali Mohamed Hasan",
      recipeint_Mobile: "+971 5205521",
      form: "www.amazon.com",
      destination: "Riyadh, Rawdia, Hassan Street Near Work Station",
      cordination: "120.98",
      number_of_pcs: "05",
      deliveryNumber: "10294838759356"
    },
    {
      recipeint_Name: "Abdullah Shah",
      recipeint_Mobile: "+971 5205521",
      form: "www.amazon.com",
      destination: "Riyadh, Rawdia, Hassan Street Near Work Station",
      cordination: "120.98",
      number_of_pcs: "05",
      deliveryNumber: "10294838759356"
    },
    {
      recipeint_Name: "Saghir Ahmed",
      recipeint_Mobile: "+971 5205521",
      form: "www.amazon.com",
      destination: "Riyadh, Rawdia, Hassan Street Near Work Station",
      cordination: "120.98",
      number_of_pcs: "05",
      deliveryNumber: "10294838759356"
    }
  ]
  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"Task"} >
      <View style={{ flex: 8, backgroundColor: Colors.bgColor }}>
        <ShipmentIdQrCode />
        <ScrollView style={{ backgroundColor: Colors.bgColor, }} contentContainerStyle={{ paddingBottom: 100 }}>
          <FlatList
            data={DATA}
            renderItem={({ item, index, separators }) => (
              <Card data={item} buttons={true} dropdown={true} />
            )}
          />
        </ScrollView>
      </View>
    </AppContainer >
  )
};

export default Task;