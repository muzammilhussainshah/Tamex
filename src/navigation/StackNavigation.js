import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Router, Scene, } from 'react-native-router-flux'
import Completed from '../screens/Completed/index';
import SplashScreen from '../screens/SplashScreen/index';
import LoginScreen from "../screens/LoginScreen/index"
import Task from '../screens/Task/index';
import Home from '../screens/Home/index';
import Login1Screen from "../screens/Login1Screen/index"
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
        {/* <Scene key='Completed' component={Completed} hideNavBar={true}  /> */}
        {/* <Scene key='SplashScreen' component={Login1Screen} hideNavBar={true}  /> */}
        <Scene key='LoginScreen' component={LoginScreen} hideNavBar={true}  />
        {/* <Scene key='Login1Screen' component={Login1Screen} hideNavBar={true}  /> */}
          {/* <Scene key='Task' component={Task} hideNavBar={true} initial />
          <Scene key='Home' component={Home} hideNavBar={true} /> */}
      </Scene>
    </Router>
  );
}