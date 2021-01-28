import AppContainer from "../../container/AppContainer";
import Colors from '../../common/Colors';
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View, Switch, TouchableOpacity
} from 'react-native';
const SettingScreen = () => {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(true);
  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"Settings"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor }}>
        <View style={styles.onDuty}>
          <Text
            style={{ fontSize: 20, color: Colors.primary, fontWeight: 'bold' }}>On-Duty
          </Text>
          <View style={styles.SwitchView}>
            <View style={styles.SwitchTextView}>
              <Text
                style={{ fontSize: 16, color: Colors.primary }}>On
              </Text>
              <Text
                style={{ fontSize: 15, color: Colors.shade }}>Off
              </Text>
            </View>
            <View style={styles.SwitchAbsoluted}>
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
          <Text
            style={styles.language}>Language
          </Text>
          <View style={styles.languageView}>
            <TouchableOpacity
              style={[styles.enlishLanguage, { backgroundColor: selectLanguage ? Colors.primary : Colors.white }]}
              onPress={() => { setSelectLanguage(true) }} >
              <Text
                style={[styles.enlishText, { color: selectLanguage ? Colors.white : Colors.shade }]}>English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.arabiLanguage, { backgroundColor: selectLanguage == false ? Colors.primary : Colors.white }]}
              onPress={() => { setSelectLanguage(false) }}>
              <Text
                style={[styles.arabicText, { color: selectLanguage == false ? Colors.white : Colors.shade }]}>العربيه
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </Body> */}
    </AppContainer>
  )
};
const styles = StyleSheet.create({
  onDuty: {
    flex: 1.2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  SwitchView: {
    width: 65,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 15
  },
  SwitchTextView: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  SwitchAbsoluted: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    position: "absolute"
  },
  languageView: {
    height: 45,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 15
  },
  enlishLanguage: {
    borderRadius: 10,
    flex: 5,
    justifyContent: "center",
    alignItems: 'center',
  },
  arabiLanguage: {
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    flex: 5,
  },
  language: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  enlishText: {
    fontSize: 17,
    letterSpacing: 0.5,
    fontWeight: "bold"
  },
  arabicText: {
    fontSize: 17,
    letterSpacing: 0.5,
    fontWeight: "bold"
  },
});
export default SettingScreen;