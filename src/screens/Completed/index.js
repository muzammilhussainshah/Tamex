import AppContainer from '../../container/AppContainer';
import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import { _tasklist } from "../../store/action/action"
import Card from "../../components/Cards";
import React, {
  useState,
  useEffect
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
const Completed = ({ _tasklist, currentUser, tasklist }) => {
  useEffect(() => {
    _tasklist(currentUser)
  }, [])

  console.log(tasklist)
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
      recipeint_Name: tasklist.length == 0 ? "Ali Mohamed Hasan" : tasklist[0].customer_name,
      recipeint_Mobile: tasklist.length == 0 ? "+971 5205521" : tasklist[0].contact_number,
      form: "www.amazon.com",
      destination: tasklist.length == 0 ? "Riyadh, Rawdia, Hassan Street Near Work Station" : tasklist[0].address_delivery,
      cordination: tasklist.length == 0 ? "120.98" : tasklist[0].cod,
      number_of_pcs: tasklist.length == 0 ? "05" : tasklist[0].numpc,
      deliveryNumber: tasklist.length == 0 ? "10294838759356" : tasklist[0].numpc,
    },
    {
      recipeint_Name: tasklist.length == 0 ? "Ali Mohamed Hasan" : tasklist[1].customer_name,
      recipeint_Mobile: tasklist.length == 0 ? "+971 5205521" : tasklist[1].contact_number,
      form: "www.amazon.com",
      destination: tasklist.length == 0 ? "Riyadh, Rawdia, Hassan Street Near Work Station" : tasklist[1].address_delivery,
      cordination: tasklist.length == 0 ? "120.98" : tasklist[1].cod,
      number_of_pcs: tasklist.length == 0 ? "05" : tasklist[1].numpc,
      deliveryNumber: tasklist.length == 0 ? "10294838759356" : tasklist[1].numpc,
    },
    {
      recipeint_Name: tasklist.length == 0 ? "Ali Mohamed Hasan" : tasklist[2].customer_name,
      recipeint_Mobile: tasklist.length == 0 ? "+971 5205521" : tasklist[2].contact_number,
      form: "www.amazon.com",
      destination: tasklist.length == 0 ? "Riyadh, Rawdia, Hassan Street Near Work Station" : tasklist[2].address_delivery,
      cordination: tasklist.length == 0 ? "120.98" : tasklist[2].cod,
      number_of_pcs: tasklist.length == 0 ? "05" : tasklist[2].numpc,
      deliveryNumber: tasklist.length == 0 ? "10294838759356" : tasklist[2].vtask_id,
    },
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
const mapStateToProp = ({ root }) => ({
  currentUser: root.currentUser,
  isLoader: root.isLoader,
  isError: root.isError,
  tasklist: root.tasklist,
})
const mapDispatchToProp = (dispatch) => ({
  _tasklist: (currentUser) => {
    dispatch(_tasklist(currentUser));
  },
})

export default connect(mapStateToProp, mapDispatchToProp)(Completed);
