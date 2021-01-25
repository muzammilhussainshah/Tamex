import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors";
import Card from "../../components/Cards";
import React, {
  useState
} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import {
  Tabs,
  Tab,
  TabHeading,
} from 'native-base';
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
                <Text
                 style={{ color: activeColor === "Completed" ? Colors.secondary : Colors.grey, fontWeight: "bold" }}>Completed
                </Text>
              </TabHeading>}
          >
            <ScrollView style={{ backgroundColor: Colors.bgColor, }} >
              <FlatList
                data={DATA}
                renderItem={({ item, index, separators }) => (
                  <Card data={item} />
                )}
              />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{ flexDirection: "column", backgroundColor: Colors.bgColor }}
              >
                <Text 
                style={{ color: activeColor === "Failed" ? Colors.secondary : Colors.grey, fontWeight: "bold" }}>Failed
                </Text>
              </TabHeading>
            }
          >
            <ScrollView style={{ backgroundColor: Colors.bgColor, }}  >
              <FlatList
                data={DATA}
                renderItem={({ item, index, separators }) => (
                  <Card 
                  data={item}
                   buttons={true} />
                )}
              />
            </ScrollView>
          </Tab>
        </Tabs>
      </View>
    </AppContainer >
  )
};
export default Completed;