import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Router, Scene, } from 'react-native-router-flux'
import Completed from '../screens/Completed/index';
import SplashScreen from '../screens/SplashScreen/index';
import LoginScreen from "../screens/LoginScreen/index"
import Task from '../screens/Task/index';
import WalkThrough from '../screens/WalkThrough/index';
import SettingScreen from '../screens/SettingScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import AboutTamEx from '../screens/AboutTamEx/index';
import Home from '../screens/Home/index';
import MenuBar from '../components/Drawer/index';
import Login1Screen from "../screens/Login1Screen/index"

import Load from '../screens/Load/index';
import Notes from '../screens/Notes/index';
import Faild from '../screens/Faild/index';
import Delivered from '../screens/Delivered/index';


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
        {/* <Scene key='MenuBar' component={MenuBar} hideNavBar={true} /> */}
        <Scene key='SettingScreen' component={SettingScreen} hideNavBar={true} />
        {/* <Scene key='ProfileScreen' component={ProfileScreen} hideNavBar={true} />
        <Scene key='AboutTamEx' component={AboutTamEx} hideNavBar={true} />
        <Scene key='Completed' component={Completed} hideNavBar={true} />
        <Scene key='Login1Screen' component={Login1Screen} hideNavBar={true} />
        <Scene key='LoginScreen' component={LoginScreen} hideNavBar={true} />
        <Scene key='WalkThrough' component={WalkThrough} hideNavBar={true} />
        <Scene key='Home' component={Home} hideNavBar={true}  />
        <Scene key='Task' component={Task} hideNavBar={true} />
        <Scene key='Load' component={Load} hideNavBar={true} />
        <Scene key='Notes' component={Notes} hideNavBar={true} />
        <Scene key='Faild' component={Faild} hideNavBar={true} />
        <Scene key='Delivered' component={Delivered} hideNavBar={true} /> */}
      </Scene>
    </Router>
  );
}