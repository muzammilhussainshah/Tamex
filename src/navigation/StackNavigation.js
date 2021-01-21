import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Router, Scene, } from 'react-native-router-flux'
import Home from '../screens/Home/index';
import Completed from '../screens/Completed/index';
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
        <Scene key='Home' component={Home} hideNavBar={true} />
        <Scene key='Completed' component={Completed} hideNavBar={true} initial/>
      </Scene>
    </Router>
  );
}