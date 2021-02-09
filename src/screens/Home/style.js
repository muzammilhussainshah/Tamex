import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../common/Colors'
export default StyleSheet.create({
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
  gauge: {
    position: 'absolute',
    width: '100%',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 24,
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