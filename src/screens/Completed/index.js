import React, { useEffect, useState } from 'react';
import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors"
import {
  Text,
  StyleSheet,
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

  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"Completed"} >
      <View style={{ flex: 8, backgroundColor: Colors.bgColor }}>
        <ScrollView contentContainerStyle={{ backgroundColor: "red" }}>

          <Tabs
            onChangeTab={(key) => activeColorChange(key)}
            locked={true}
            tabBarUnderlineStyle={{ backgroundColor: Colors.secondary }}
          >
            <Tab
              activeTabStyle={{ backgroundColor: 'red' }}
              heading={
                <TabHeading
                  style={{ flexDirection: "column", backgroundColor: Colors.bgColor }}
                >
                  <Text style={{ color: activeColor === "Completed" ? Colors.secondary : Colors.grey, fontWeight: "bold" }}>Completed</Text>
                </TabHeading>}
            >
              <Card />
            </Tab>

            <Tab
              activeTabStyle={{ backgroundColor: 'red' }}
              heading={
                <TabHeading
                  style={{ flexDirection: "column", backgroundColor: Colors.bgColor }}
                >
                  <Text style={{ color: activeColor === "Failed" ? Colors.secondary : Colors.grey, fontWeight: "bold" }}>Failed</Text>
                </TabHeading>
              }
            >
              <View>
                <Text>TESTING Failed</Text>
              </View>
            </Tab>
          </Tabs>

        </ScrollView>
      </View>
    </AppContainer>
  )
};

const styles = StyleSheet.create({
  percent: {

  },
});

export default Completed;