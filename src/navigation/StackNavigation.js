import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Router, Scene, } from 'react-native-router-flux'
import Completed from '../screens/Completed/index';
import Task from '../screens/Task/index';
import Load from '../screens/Load/index';
import Home from '../screens/Home/index';
import Notes from '../screens/Notes/index';
import Faild from '../screens/Faild/index';
export default Route = () => {
  const [initial, setInitial] = useState("WalkThrough");

  useEffect(() => {
    routInitiliaz()
  })

  const routInitiliaz = async () => {
    const WalkThrough = await AsyncStorage.getItem('WalkThrough')
    if (WalkThrough) {
      setInitial("SignIn")
    }
    await AsyncStorage.setItem('WalkThrough', "true")
  }

  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>
        <Scene key='Completed' component={Completed} hideNavBar={true} />
        <Scene key='Task' component={Task} hideNavBar={true} initial />
        <Scene key='Home' component={Home} hideNavBar={true} />
        <Scene key='Load' component={Load} hideNavBar={true} />
        <Scene key='Notes' component={Notes} hideNavBar={true} />
        <Scene key='Faild' component={Faild} hideNavBar={true} />
      </Scene>
    </Router>
  );
}