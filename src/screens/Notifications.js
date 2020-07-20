import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ScrollView
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import NotificationComponent from "../components/NotificationComponent";
import Footer from "../components/Footer";

function Notifications(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.tabSectionColumn}>
        <View style={styles.tabSection}>
          <View style={styles.notifsTab}>
            <Text style={styles.text}>Notifications</Text>
          </View>
          <View style={styles.messagesTab}>
            <Text style={styles.text2}>Messages</Text>
          </View>
          <View style={styles.modMailTab}>
            <Text style={styles.text3}>Mod mail</Text>
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/bat.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.text4}>Inbox</Text>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.allActivity}>
          <View style={styles.icon2Row}>
            <MaterialCommunityIconsIcon
              name="flash"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.text5}>ALL ACTIVITY</Text>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={styles.icon3}
            ></IoniconsIcon>
          </View>
        </View>
      </View>
      <View style={styles.dividerStack}>
        <Divider style={styles.divider}></Divider>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.trendingNotif}>
              <MaterialCommunityIconsIcon
                name="trending-up"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
              <View style={styles.content}>
                <Text style={styles.text6}>Trending on r/FlutterDev</Text>
                <Text style={styles.text7}>Flutter web image picker</Text>
                <Text style={styles.text8}>Trending • 1h</Text>
              </View>
            </View>
            <Divider style={styles.divider2}></Divider>
            <NotificationComponent
              style={styles.notificationComponent}
            ></NotificationComponent>
            <Divider style={styles.divider3}></Divider>
            <NotificationComponent
              Time="Comment reply • 2mo"
              NotificationHeading="u/bcd replied to your comment in r/bangalore"
              notificationContent="Right. "
              style={styles.notificationComponent2}
            ></NotificationComponent>
            <Divider style={styles.divider4}></Divider>
            <NotificationComponent
              NotificationHeading="u/moderator replied to you comment in r/AskReddit"
              notificationContent="Please read this message"
              style={styles.notificationComponent3}
            ></NotificationComponent>
            <Divider style={styles.divider5}></Divider>
            <NotificationComponent
              NotificationHeading="u/moderator replied to you comment in r/AskReddit"
              notificationContent="Please read this message"
              style={styles.notificationComponent4}
            ></NotificationComponent>
            <Divider style={styles.divider6}></Divider>
            <NotificationComponent
              NotificationHeading="u/moderator replied to you comment in r/AskReddit"
              notificationContent="Please read this message"
              style={styles.notificationComponent5}
            ></NotificationComponent>
            <Divider style={styles.divider7}></Divider>
          </ScrollView>
        </View>
        <Footer style={styles.footer}></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  tabSection: {
    height: 58,
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "rgba(128,128,128,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 69
  },
  notifsTab: {
    width: 127,
    height: 59,
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0,
    borderColor: "#036bbd",
    borderWidth: 0,
    borderBottomWidth: 3,
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    alignSelf: "center"
  },
  messagesTab: {
    width: 101,
    height: 59,
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    alignSelf: "center"
  },
  modMailTab: {
    width: 95,
    height: 59,
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0,
    justifyContent: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginLeft: 10
  },
  header: {
    height: 60,
    flexDirection: "row",
    marginTop: -127
  },
  image: {
    width: 35,
    height: 36,
    borderRadius: 10
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "ibm-plex-sans-regular",
    marginLeft: 19,
    marginTop: 6
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 191,
    marginTop: 5
  },
  imageRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 18,
    marginTop: 12
  },
  allActivity: {
    width: 187,
    height: 26,
    flexDirection: "row",
    marginTop: 81,
    marginLeft: 15
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  text5: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    marginLeft: 10,
    marginTop: 4
  },
  icon3: {
    color: "grey",
    fontSize: 20,
    marginLeft: 36
  },
  icon2Row: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginTop: 2
  },
  tabSectionColumn: {
    marginTop: 22
  },
  divider: {
    top: 15,
    left: 0,
    height: 1,
    position: "absolute",
    right: 0
  },
  scrollArea: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    right: 0,
    bottom: 49
  },
  scrollArea_contentContainerStyle: {
    height: 676,
    justifyContent: "flex-start"
  },
  trendingNotif: {
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  icon4: {
    color: "rgba(2,107,189,1)",
    fontSize: 20,
    width: 20,
    marginTop: 20,
    alignSelf: "flex-start"
  },
  content: {
    width: 294,
    height: 80,
    alignSelf: "center",
    marginTop: 10
  },
  text6: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  text7: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 9
  },
  text8: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 9
  },
  divider2: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent: {
    height: 110,
    alignSelf: "stretch"
  },
  divider3: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent2: {
    height: 110,
    alignSelf: "stretch"
  },
  divider4: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent3: {
    height: 110,
    alignSelf: "stretch"
  },
  divider5: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent4: {
    height: 110,
    alignSelf: "stretch"
  },
  divider6: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent5: {
    height: 120,
    alignSelf: "stretch"
  },
  divider7: {
    height: 1,
    alignSelf: "stretch"
  },
  footer: {
    left: 0,
    height: 50,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  dividerStack: {
    flex: 1
  }
});

export default Notifications;
