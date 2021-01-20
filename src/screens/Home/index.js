import React from "react";
import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors"
import Ionicons from "react-native-vector-icons/Ionicons"
import FastImage from 'react-native-fast-image'
import Entypo from "react-native-vector-icons/Entypo"
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
const Home = () => {
  return (
    <AppContainer
      msgScreen={true}
      drawerProps={true}
      heading={"Dashbord"} >
      <View style={{ flex: 7.8, backgroundColor: Colors.bgColor }}>
        {/* <Body> */}
        <View style={{ flex: 4.4 }}>
          {/* <Pie Work> */}
          <View style={styles.percent}>
            <View style={styles.circleOne}>
              <View style={styles.circleTwo}>
                <View style={styles.circleThree}>
                  <View style={styles.circleFour}>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <Pie Work> */}
          <View style={{ flex: 5 }}>
          </View>
          {/* <Shipments> */}
          <View style={{ flex: 5 }}>
            <Text
              style={styles.Shipments}>Shipments
             </Text>
            <View style={{ flex: 7.5, flexDirection: "row", justifyContent: "space-evenly" }}>
              <View style={styles.divOne}>
                <Text
                  style={{ color: Colors.shade, paddingHorizontal: 10 }}>Pickup
                </Text>
                <View style={styles.divOneFChild}>
                  <View style={styles.homeIcon}>
                    <Entypo
                      name="home"
                      style={{ fontSize: 17, color: Colors.white }} />
                  </View>
                  <Text
                    style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>25
                  </Text>
                </View>
              </View>
              <View style={styles.divTwo}>
                <Text
                  style={{ color: Colors.shade, paddingHorizontal: 10 }}>Delivery
                 </Text>
                <View style={styles.divTwoFChild}>
                  <View style={styles.flag}>
                    <Ionicons
                      name="md-flag"
                      style={{ fontSize: 15, color: Colors.white }} />
                  </View>
                  <Text
                    style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>13
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* </Shipments> */}
        </View>
        {/* <status> */}
        <View style={{ flex: 2.8 }}>
          <Text style={styles.status}>Status</Text>
          <View style={{ flex: 8.2, flexDirection: "row", justifyContent: "space-evenly" }}>
            <View style={styles.complete}>
              <Text
                style={{ color: Colors.shade, letterSpacing: 0.5, paddingHorizontal: 10 }}>Complete
               </Text>
              <View style={styles.completeImg}>
                <FastImage
                  style={{ height: 30, width: 35, }}
                  source={require("../../assets/complete.png")}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>18
                </Text>
              </View>
            </View>
            <View style={styles.pending}>
              <Text
                style={{ color: Colors.shade, letterSpacing: 0.5, paddingHorizontal: 10 }}>Pending
              </Text>
              <View style={styles.pendingImg}>
                <FastImage
                  style={{ height: 30, width: 35, }}
                  source={require("../../assets/pending.png")}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>10
                 </Text>
              </View>
            </View>
            <View style={styles.failedDiv}>
              <Text
                style={{ color: Colors.shade, letterSpacing: 0.5, paddingHorizontal: 10 }}>Failed
              </Text>
              <View style={styles.failImg}>
                <FastImage
                  style={{ height: 30, width: 35, }}
                  source={require("../../assets/fail.png")}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>05
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* </status> */}

        {/* <balance> */}
        <View style={{ flex: 2.8 }}>
          <View style={styles.balanceImg}>
            <View style={{ justifyContent: "flex-end", height: "95%", width: "80%" }}>
              <FastImage
                style={{ height: 100, width: 150, }}
                source={require("../../assets/balance.png")}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </View>
          <Text
            style={styles.balance}>Balance
          </Text>
          <View style={styles.lastDiv}>
            <View style={styles.BalanceDiv}>
              <View style={{ flex: 5, alignItems: "center" }}>
              </View>
              <View style={{ flex: 5, justifyContent: "center" }}>
                <Text
                  style={{ fontSize: 28, fontWeight: "bold", color: Colors.primary, }}>$3,251.88
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* </balance> */}
      </View>
      {/* </Body> */}

    </AppContainer>
  )
};
const styles = StyleSheet.create({
  percent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%"
  },
  circleOne: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderColor: Colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  circleTwo: {
    height: 205,
    width: 205,
    borderRadius: 102.5,
    borderColor: Colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  circleThree: {
    height: 160,
    width: 160,
    borderRadius: 130,
    borderColor: Colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  circleFour: {
    height: 115,
    width: 115,
    borderRadius: 57.5,
    borderColor: Colors.white,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  Shipments: {
    fontSize: 20,
    flex: 2.5,
    fontWeight: "bold",
    color: Colors.primary,
    paddingHorizontal: 10
  },
  divOne: {
    backgroundColor: Colors.white,
    justifyContent: "space-evenly",
    margin: 1,
    borderRadius: 10,
    height: "100%",
    width: "45%"
  },
  divOneFChild: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%"
  },
  homeIcon: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center"
  },
  divTwo: {
    backgroundColor: Colors.white,
    justifyContent: "space-evenly",
    margin: 1,
    borderRadius: 10,
    height: "100%",
    width: "45%"
  },
  divTwoFChild: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%"
  },
  flag: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: "center"
  },
  status: {
    fontSize: 20,
    flex: 1.8,
    fontWeight: "bold",
    color: Colors.primary,
    paddingHorizontal: 10
  },
  complete: {
    backgroundColor: Colors.white,
    justifyContent: "space-evenly",
    margin: 1,
    borderRadius: 10,
    height: "95%",
    width: "30%"
  },
  completeImg: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%"
  },
  pending: {
    backgroundColor: Colors.white,
    justifyContent: "space-evenly",
    margin: 1,
    borderRadius: 10,
    height: "95%",
    width: "30%"
  },
  pendingImg: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%"
  },
  failedDiv: {
    backgroundColor: Colors.white,
    justifyContent: "space-evenly",
    margin: 1,
    borderRadius: 10,
    height: "95%",
    width: "30%"
  },
  failImg: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%"
  },
  balanceImg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
    alignItems: 'center'
  },
  balance: {
    fontSize: 20,
    flex: 2.5,
    fontWeight: "bold",
    color: Colors.primary,
    paddingHorizontal: 10
  },
  lastDiv: {
    flex: 7.5,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  BalanceDiv: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 1,
    borderRadius: 10,
    height: "80%",
    width: "95%"
  },
});
export default Home;