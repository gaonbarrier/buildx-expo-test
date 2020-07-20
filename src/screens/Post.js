import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Divider from "../components/Divider";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";

function Post(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerSection}>
        <View style={styles.button3Row}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button3}
          >
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <MaterialCommunityIconsIcon
            name="bookmark"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.button3RowFiller}></View>
        <Divider style={styles.divider}></Divider>
      </View>
      <View style={styles.postDetails}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/bat.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.textColumn}>
            <Text style={styles.text}>r/Jokes</Text>
            <Text style={styles.text2}>Posted by u/explosivelyddehi • 10h</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text3}>
        They all laughed when I told them that one day I would discover the
        secrets of invisibility
      </Text>
      <Text style={styles.text4}>If only they could see me now</Text>
      <View style={styles.actionBar}>
        <View style={styles.postVote}>
          <EntypoIcon name="arrow-up" style={styles.icon4}></EntypoIcon>
          <Text style={styles.text5}>16.5k</Text>
          <EntypoIcon name="arrow-down" style={styles.icon5}></EntypoIcon>
        </View>
        <TouchableOpacity style={styles.button4}>
          <MaterialCommunityIconsIcon
            name="comment"
            style={styles.icon6}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.text6}>346</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <FontAwesomeIcon name="share" style={styles.icon7}></FontAwesomeIcon>
          <Text style={styles.text7}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentSelection}>
        <View style={styles.icon9Row}>
          <MaterialCommunityIconsIcon
            name="rocket"
            style={styles.icon9}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.text8}>BEST COMMENTS</Text>
          <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon8}
          ></IoniconsIcon>
        </View>
      </View>
      <View style={styles.commentsWrapperStack}>
        <View style={styles.commentsWrapper}>
          <View style={styles.comment1}>
            <Text style={styles.text9}>Mindbender • 9h</Text>
            <Text style={styles.text10}>
              You didn&#39;t have me in the first half, not gonna lie.
            </Text>
            <View style={styles.group}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.commentOptions}
              ></MaterialCommunityIconsIcon>
              <View style={styles.replyAction}>
                <View style={styles.icon12Row}>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={styles.icon12}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.text16}>Reply</Text>
                </View>
              </View>
              <View style={styles.commentVote}>
                <EntypoIcon name="arrow-up" style={styles.icon10}></EntypoIcon>
                <Text style={styles.text15}>16</Text>
                <EntypoIcon
                  name="arrow-down"
                  style={styles.icon11}
                ></EntypoIcon>
              </View>
            </View>
          </View>
          <View style={styles.comment11}>
            <Text style={styles.text11}>I can&#39;t see either half</Text>
            <Text style={styles.text12}>Mindbender • 9h</Text>
            <View style={styles.rect3}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon13}
              ></MaterialCommunityIconsIcon>
              <View style={styles.rect4}>
                <View style={styles.icon14Row}>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={styles.icon14}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.text17}>Reply</Text>
                </View>
              </View>
              <View style={styles.rect5}>
                <EntypoIcon name="arrow-up" style={styles.icon15}></EntypoIcon>
                <Text style={styles.text18}>16</Text>
                <EntypoIcon
                  name="arrow-down"
                  style={styles.icon16}
                ></EntypoIcon>
              </View>
            </View>
          </View>
          <View style={styles.comment111}>
            <Text style={styles.text13}>Mindbender • 9h</Text>
            <Text style={styles.text14}>I can&#39;t see either half</Text>
            <View style={styles.rect6}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon17}
              ></MaterialCommunityIconsIcon>
              <View style={styles.rect7}>
                <View style={styles.icon18Row}>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={styles.icon18}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.text19}>Reply</Text>
                </View>
              </View>
              <View style={styles.rect8}>
                <EntypoIcon name="arrow-up" style={styles.icon19}></EntypoIcon>
                <Text style={styles.text20}>16</Text>
                <EntypoIcon
                  name="arrow-down"
                  style={styles.icon20}
                ></EntypoIcon>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.addCommentSection}>
          <View style={styles.group2}>
            <TextInput
              placeholder="Add a comment"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={styles.group2Filler}></View>
          <View style={styles.group3}>
            <View style={styles.group4}>
              <View style={styles.icon21Stack}>
                <SimpleLineIconsIcon
                  name="arrow-down"
                  style={styles.icon21}
                ></SimpleLineIconsIcon>
                <SimpleLineIconsIcon
                  name="arrow-down"
                  style={styles.icon22}
                ></SimpleLineIconsIcon>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  headerSection: {
    height: 60,
    marginTop: 22
  },
  button3: {
    width: 30,
    height: 30,
    justifyContent: "center"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 228,
    marginTop: 2
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 2
  },
  button3Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 17,
    marginRight: 17
  },
  button3RowFiller: {
    flex: 1
  },
  divider: {
    height: 1
  },
  postDetails: {
    height: 48,
    marginTop: 20,
    marginLeft: 19,
    marginRight: 42
  },
  image: {
    width: 35,
    height: 36,
    borderRadius: 10,
    marginTop: 6
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "ibm-plex-sans-regular"
  },
  text2: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 6
  },
  textColumn: {
    width: 220,
    marginLeft: 12
  },
  imageRow: {
    height: 49,
    flexDirection: "row",
    marginRight: 32
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 28,
    marginLeft: 19,
    marginRight: 19
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 12,
    marginLeft: 19
  },
  actionBar: {
    width: 322,
    height: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 27,
    alignSelf: "center"
  },
  postVote: {
    width: 71,
    height: 17,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  icon4: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text5: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon5: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  button4: {
    width: 43,
    height: 14,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon6: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text6: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  button2: {
    width: 57,
    height: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon7: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text7: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  commentSelection: {
    width: 154,
    height: 20,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 17
  },
  icon9: {
    color: "grey",
    fontSize: 20
  },
  text8: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginLeft: 6,
    marginTop: 4
  },
  icon8: {
    color: "grey",
    fontSize: 20,
    marginLeft: 6
  },
  icon9Row: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  commentsWrapper: {
    top: 0,
    left: 0,
    height: 322,
    position: "absolute",
    right: 0,
    justifyContent: "space-around"
  },
  comment1: {
    width: 304,
    height: 64
  },
  text9: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  text10: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 7
  },
  group: {
    width: 228,
    height: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 75
  },
  commentOptions: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    alignSelf: "center",
    height: 16
  },
  replyAction: {
    width: 55,
    height: 16,
    alignSelf: "center",
    flexDirection: "row"
  },
  icon12: {
    color: "grey",
    fontSize: 12
  },
  text16: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    marginLeft: 12
  },
  icon12Row: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginTop: 1
  },
  commentVote: {
    width: 62,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon10: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text15: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon11: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  comment11: {
    width: 284,
    height: 67,
    marginLeft: 30
  },
  text11: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 26
  },
  text12: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: -44
  },
  rect3: {
    width: 228,
    height: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 38,
    marginLeft: 56
  },
  icon13: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    alignSelf: "center",
    height: 16
  },
  rect4: {
    width: 55,
    height: 16,
    alignSelf: "center",
    flexDirection: "row"
  },
  icon14: {
    color: "grey",
    fontSize: 12
  },
  text17: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    marginLeft: 12
  },
  icon14Row: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginTop: 1
  },
  rect5: {
    width: 62,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon15: {
    color: "#828384",
    fontSize: 12
  },
  text18: {
    color: "#828384",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon16: {
    color: "#828384",
    fontSize: 12
  },
  comment111: {
    width: 255,
    height: 66,
    marginLeft: 60
  },
  text13: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  text14: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 9
  },
  rect6: {
    width: 228,
    height: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 26
  },
  icon17: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    alignSelf: "center",
    height: 16
  },
  rect7: {
    width: 55,
    height: 16,
    alignSelf: "center",
    flexDirection: "row"
  },
  icon18: {
    color: "grey",
    fontSize: 12
  },
  text19: {
    color: "rgba(128,128,128,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    marginLeft: 12
  },
  icon18Row: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginTop: 1
  },
  rect8: {
    width: 62,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon19: {
    color: "#828384",
    fontSize: 12
  },
  text20: {
    color: "#828384",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon20: {
    color: "#828384",
    fontSize: 12
  },
  addCommentSection: {
    left: 1,
    height: 40,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row"
  },
  group2: {
    width: 275,
    backgroundColor: "#1a1a1c",
    borderRadius: 6,
    justifyContent: "center"
  },
  textInput: {
    width: 265,
    height: 32,
    backgroundColor: "#1a1a1c",
    color: "rgba(255,255,255,1)",
    borderRadius: 6,
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginLeft: 10
  },
  group2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  group3: {
    width: 40,
    height: 40,
    backgroundColor: "#1a1a1c",
    borderRadius: 100,
    justifyContent: "center"
  },
  group4: {
    width: 20,
    height: 28,
    alignSelf: "center"
  },
  icon21: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  icon22: {
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    top: 8
  },
  icon21Stack: {
    width: 20,
    height: 30
  },
  commentsWrapperStack: {
    height: 337,
    marginTop: 26,
    marginLeft: 19,
    marginRight: 13
  }
});

export default Post;
