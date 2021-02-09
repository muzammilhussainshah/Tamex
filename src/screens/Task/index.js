import AppContainer from '../../container/AppContainer';
import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import { _tasklist } from "../../store/action/action";

import React, {
  useEffect,
  useState,
} from 'react';
import {
  View,
  ScrollView,
  FlatList
} from 'react-native';
import ShipmentIdQrCode from "../../components/shipmentIdQrCode";
import Card from "../../components/Cards";
const Task = ({ _tasklist, currentUser, tasklist }) => {
  useEffect(() => {
    _tasklist(currentUser)
    // _requestLocation()
  }, [])

// console.log(tasklist)


  let DATA = {
    no: 2,
    
    tasks: [
      {
        "vtask_id": "16540999783401",
        "status": "acknowledged",
        "customer_name": "Omar Saeed",
        "contact_number": "96652479922",
        "Khubar,Khubar": "address_delivery ",
        "trans_type": "delivery",
        "delivery_address": "ى,Khubar,Khubar,الخبر, حي البایونیھ مقابل مستشفى ",
        "task_description": "La brezza",
        "cod": "0.00",
        "numpc": "1",
        "task_lat": "",
        "task_lng": "",
        "customer_set_by": "VENDO"
      },
      {
        "vtask_id": "14362877151562",
        "status": "successful",
        "customer_name": "Abdulmohsen alabdulkreem",
        "contact_number": "9665525252263",
        "Khubar,Khubar": "address_delivery ",
        "delivery_address": "ى,Khubar,Khubar,الخبر, حي البایونیھ مقابل مستشفى ",

        "trans_type": "delivery",
        "task_description": "La brezza",
        "cod": "0.00",
        "numpc": "1",
        "task_lat": "",
        "task_lng": "",
        "customer_set_by": "VENDO"
      }
    ]
  }



  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"Task"} >
      <View style={{ flex: 8, backgroundColor: Colors.bgColor }}>
        <ShipmentIdQrCode />
        <ScrollView style={{ backgroundColor: Colors.bgColor, }} >
          <FlatList
            data={DATA.tasks}
            renderItem={({ item, index, separators }) => (
              <Card
                data={item}
                buttons={true}
                dropdown={true} />
            )}
          />
        </ScrollView>
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

export default connect(mapStateToProp, mapDispatchToProp)(Task);
