import React, { useState } from 'react';
import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors"
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import Card from "../../components/Cards"

const Completed = () => {
  const [activeColor, setActiveColor] = useState("Completed");
  const activeColorChange = (key) => {
    if (key.ref.key == ".0") {
      setActiveColor("Completed")
    }
    if (key.ref.key == ".1") {
      setActiveColor("Failed")
    }
  }
  let data = [
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
      recipeint_Name: "Ali Mohamed Hasan",
      recipeint_Mobile: "+971 5205521",
      form: "www.amazon.com",
      destination: "Riyadh, Rawdia, Hassan Street Near Work Station",
      cordination: "120.98",
      number_of_pcs: "05",
      deliveryNumber: "10294838759356"
    },
    {
      recipeint_Name: "Ali Mohamed Hasan",
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
      heading={"Completed"} >
      <View style={{ flex: 8, backgroundColor: Colors.bgColor }}>
        <Tabs
          onChangeTab={(key) => activeColorChange(key)}
          locked={true}
          tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
        >
          <Tab
            heading={
              <TabHeading
                style={{ flexDirection: "column", backgroundColor: Colors.bgColor }}
              >
                <Text style={{ color: activeColor === "Completed" ? Colors.secondary : Colors.grey, fontWeight: "bold" }}>Completed</Text>
              </TabHeading>}
          >
            <ScrollView style={{ backgroundColor: Colors.bgColor, }} contentContainerStyle={{ paddingBottom: 100 }}>
              <Card />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{ flexDirection: "column", backgroundColor: Colors.bgColor }}
              >
                <Text style={{ color: activeColor === "Failed" ? Colors.secondary : Colors.grey, fontWeight: "bold" }}>Failed</Text>
              </TabHeading>
            }
          >
            <ScrollView style={{ backgroundColor: Colors.bgColor, }} contentContainerStyle={{ paddingBottom: 100 }}>
              <Card failed={true} />
            </ScrollView>
          </Tab>
        </Tabs>

      </View>
    </AppContainer >
  )
};

export default Completed;