import React, { useState } from "react";
import Colors from '../../common/Colors'
import {
  Text,
  StyleSheet,
  View, Switch, TouchableOpacity
} from 'react-native';
import { Col } from "native-base";
const SettingScreen = () => {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(true);

  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"Settings"} >
      <View style={{ flex: 7.8, paddingHorizontal: 10, backgroundColor: Colors.bgColor }}>
        <View style={{ flex: 1.2, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: Colors.primary, fontWeight: 'bold' }}>On-Duty</Text>
          <View style={{ width: 65, height: 30, backgroundColor: Colors.white, borderRadius: 15 }}>
            <View style={{ flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
              <Text style={{ fontSize: 16, color: Colors.shade }}>On</Text>
              <Text style={{ fontSize: 15, color: Colors.shade }}>Off</Text>
            </View>
            <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 15, position: "absolute" }}>
              <Switch
                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.1 }] }}
                trackColor={{ false: Colors.transprent, true: Colors.transprent }}
                thumbColor={isEnabled ? Colors.primary : Colors.shade}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 8.8 }}>
          <Text style={{ fontSize: 20, color: Colors.primary, fontWeight: 'bold' }}>Language</Text>
          <View style={{ height: 45, borderRadius: 10, flexDirection: "row", backgroundColor: Colors.white, marginVertical: 15 }}>
            <TouchableOpacity style={{ borderRadius: 10, flex: 5, justifyContent: "center", alignItems: 'center', backgroundColor: selectLanguage ? Colors.primary : Colors.white }} onPress={() => { setSelectLanguage(true) }} >
              <Text style={{ color: selectLanguage ? Colors.white : Colors.shade,fontSize:17,letterSpacing:0.5,fontWeight:"bold" }}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center',borderRadius: 10, flex: 5, backgroundColor: selectLanguage == false ? Colors.primary : Colors.white }} onPress={() => { setSelectLanguage(false) }}>
            <Text style={{ color: selectLanguage==false ? Colors.white : Colors.shade,fontSize:17,letterSpacing:0.5,fontWeight:"bold" }}>العربيه</Text>

            </TouchableOpacity>
          </View>
        </View>

      </View>
    </AppContainer>
  )
};
const styles = StyleSheet.create({
});
export default SettingScreen;