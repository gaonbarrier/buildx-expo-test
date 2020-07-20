import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import Divider from "../components/Divider";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderSection from "../components/HeaderSection";
import PostComponent from "../components/PostComponent";
import Footer from "../components/Footer";

function Popular(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <View style={styles.headerTabsColumn}>
        <View style={styles.headerTabs}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.homeText}>Home</Text>
          </TouchableOpacity>
          <View style={styles.popularTab}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
        </View>
        <View style={styles.layoutOptions}>
          <View style={styles.bestPostIconRow}>
            <SimpleLineIconsIcon
              name="fire"
              style={styles.bestPostIcon}
            ></SimpleLineIconsIcon>
            <Text style={styles.bestPosts}>HOT POSTS</Text>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={styles.dropdownIcon}
            ></IoniconsIcon>
            <MaterialIconsIcon
              name="view-agenda"
              style={styles.layoutIcon}
            ></MaterialIconsIcon>
          </View>
        </View>
        <Divider style={styles.divider}></Divider>
        <View style={styles.trendingIconRow}>
          <MaterialCommunityIconsIcon
            name="trending-up"
            style={styles.trendingIcon}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.trendingToday}>Trending today</Text>
        </View>
        <View style={styles.trendingSection}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.trendingSection_contentContainerStyle}
          >
            <View style={styles.cover1}>
              <ImageBackground
                source={require("../assets/images/gita.jpg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              >
                <ImageBackground
                  style={styles.rect}
                  imageStyle={styles.rect_imageStyle}
                  source={require("../assets/images/Gradient_Kt0MWXz.png")}
                >
                  <Text style={styles.text2}>Gita</Text>
                </ImageBackground>
              </ImageBackground>
            </View>
            <View style={styles.cover2}>
              <ImageBackground
                source={require("../assets/images/lights.jpg")}
                resizeMode="cover"
                style={styles.image2}
                imageStyle={styles.image2_imageStyle}
              >
                <ImageBackground
                  style={styles.rect2}
                  imageStyle={styles.rect2_imageStyle}
                  source={require("../assets/images/Gradient_EvncrhH.png")}
                >
                  <Text style={styles.text22}>Northern Lights</Text>
                </ImageBackground>
              </ImageBackground>
            </View>
            <View style={styles.rect22}>
              <ImageBackground
                source={require("../assets/images/lights.jpg")}
                resizeMode="cover"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
                <ImageBackground
                  style={styles.rect23}
                  imageStyle={styles.rect23_imageStyle}
                  source={require("../assets/images/Gradient_uud6Z3L.png")}
                >
                  <Text style={styles.text23}>Northern Lights</Text>
                </ImageBackground>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        <HeaderSection style={styles.headerSection}></HeaderSection>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <PostComponent style={styles.postComponent}></PostComponent>
          <PostComponent
            ContentText="Mayank Agarwal has scored his maiden double century - which is also his first century - in his 5th test match and the first match in India"
            Subreddit="r/Cricket"
            UpvotesText="873"
            CommentText="91"
            PostDetails="Posted by u/hey • 5 hours ago"
            style={styles.postComponent2}
          ></PostComponent>
          <PostComponent
            ContentText="What is an odd behaviour of yours you think only you do?"
            Subreddit="r/AskReddit"
            UpvotesText="873"
            CommentText="91"
            PostDetails="Posted by u/hey • 10 hours ago"
            style={styles.postComponent3}
          ></PostComponent>
          <PostComponent
            ContentText="Betty Marion white was born in 1922; the first BMW car was made in 1928. Betty White is the original BMW"
            Subreddit="r/ShowerThoughts"
            UpvotesText="34.3k"
            CommentText="280"
            PostDetails="Posted by u/dinger • 10 hours ago"
            style={styles.postComponent4}
          ></PostComponent>
        </ScrollView>
      </View>
      <Footer style={styles.footer}></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  headerTabs: {
    height: 48,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 66
  },
  button: {
    width: 124,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  homeText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    alignSelf: "center"
  },
  popularTab: {
    width: 142,
    alignSelf: "stretch",
    borderColor: "#036bbd",
    borderWidth: 0,
    borderBottomWidth: 3,
    justifyContent: "center"
  },
  popularText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    alignSelf: "center"
  },
  layoutOptions: {
    height: 47,
    flexDirection: "row",
    marginTop: 1
  },
  bestPostIcon: {
    color: "grey",
    fontSize: 20,
    marginTop: 1
  },
  bestPosts: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginLeft: 5,
    marginTop: 3
  },
  dropdownIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 29
  },
  layoutIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 145,
    marginTop: 2
  },
  bestPostIconRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 32,
    marginLeft: 15,
    marginTop: 12
  },
  divider: {
    height: 1
  },
  trendingIcon: {
    color: "#036bbd",
    fontSize: 20
  },
  trendingToday: {
    color: "#036bbd",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1,
    marginLeft: 20
  },
  trendingIconRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 13,
    marginRight: 183
  },
  trendingSection: {
    width: 360,
    height: 143,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 9
  },
  trendingSection_contentContainerStyle: {
    width: 516,
    height: 143,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  cover1: {
    width: 156,
    height: 128,
    marginLeft: 16,
    borderRadius: 10
  },
  image: {
    width: 156,
    height: 128,
    borderRadius: 10,
    overflow: "hidden"
  },
  image_imageStyle: {},
  rect: {
    borderRadius: 10,
    flex: 1,
    overflow: "hidden"
  },
  rect_imageStyle: {},
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1,
    marginBottom: 5,
    marginLeft: 59
  },
  cover2: {
    width: 156,
    height: 128,
    marginLeft: 16,
    borderRadius: 10
  },
  image2: {
    width: 156,
    height: 128,
    borderRadius: 10,
    overflow: "hidden"
  },
  image2_imageStyle: {},
  rect2: {
    borderRadius: 10,
    flex: 1,
    overflow: "hidden"
  },
  rect2_imageStyle: {},
  text22: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1,
    marginBottom: 5,
    alignSelf: "center"
  },
  rect22: {
    width: 156,
    height: 128,
    marginLeft: 16,
    borderRadius: 10
  },
  image3: {
    width: 156,
    height: 128,
    borderRadius: 10,
    overflow: "hidden"
  },
  image3_imageStyle: {},
  rect23: {
    borderRadius: 10,
    flex: 1,
    overflow: "hidden"
  },
  rect23_imageStyle: {},
  text23: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1,
    marginBottom: 5,
    alignSelf: "center"
  },
  headerSection: {
    height: 60,
    marginTop: -351
  },
  headerTabsColumn: {
    marginTop: 22
  },
  scrollArea: {
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1,
    marginBottom: 11
  },
  scrollArea_contentContainerStyle: {
    height: 480
  },
  postComponent: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent2: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent3: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent4: {
    height: 120,
    alignSelf: "stretch"
  },
  footer: {
    height: 50
  }
});

export default Popular;
