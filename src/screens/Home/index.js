import React from "react";
import AppContainer from '../../container/AppContainer';
import Colors from "../../common/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import Pie from 'react-native-pie';
import FastImage from 'react-native-fast-image';
import Entypo from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
import styles from "./style"
import {
  Text,
  View
} from 'react-native';
const Home = ({ stats  }) => {
  // console.log(stats,"stats")
  let total = stats.total
  let failed = stats.failed
  let complete = stats.successful
  let pending = total - [failed + complete]
  let totalPercent = Math.floor([complete - failed] / [total] * [100])
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
                    <View style={{ alignItems: 'center' }}>
                      <Pie
                        radius={60}
                        innerRadius={50}
                        sections={[
                          {
                            percentage: totalPercent,
                            color: Colors.primary,
                          },
                        ]}
                        backgroundColor={Colors.white}
                      />
                      <View
                        style={styles.gauge}
                      >
                        <Text
                          style={styles.gaugeText}>{totalPercent + "%"}
                        </Text>
                      </View>
                    </View>
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
                    style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>{stats.pickup}
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
                    style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>{stats.delivery}
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
                  style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>{stats.successful}
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
                  style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>{pending}
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
                  style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}>{stats.failed}
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
                  style={{ fontSize: 28, fontWeight: "bold", color: Colors.primary, }}>${stats.TotalCOD}
                  {/* style={{ fontSize: 28, fontWeight: "bold", color: Colors.primary, }}>$3,251.88 */}
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

const mapStateToProp = ({ root }) => ({
  currentUser: root.currentUser,
  isLoader: root.isLoader,
  isError: root.isError,
  stats: root.stats,
})
const mapDispatchToProp = (dispatch) => ({
  _logout: (currentUser) => {
    dispatch(_logout(currentUser));
  },
})


export default connect(mapStateToProp, mapDispatchToProp)(Home);