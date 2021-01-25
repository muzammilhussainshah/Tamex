import React  from 'react';
import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors"
import ShipmentIdQrCode from "../../components/shipmentIdQrCode"
import Card from "../../components/CardsLoad"
import {
  View,
  ScrollView,
  FlatList
} from 'react-native';
const Load = () => {
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
      heading={"Load"} >
      <View style={{ flex: 8, backgroundColor: Colors.bgColor }}>
        <ShipmentIdQrCode />
        <ScrollView style={{ backgroundColor: Colors.bgColor, }}  >
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Card 
              data={item} 
              buttons={true} />
            )}
          />
        </ScrollView>
      </View>
    </AppContainer >
  )
};
export default Load;