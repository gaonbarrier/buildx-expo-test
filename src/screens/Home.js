import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import HeaderSection from "../components/HeaderSection";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import Divider from "../components/Divider";
import PostComponent from "../components/PostComponent";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <View style={styles.headerSectionColumn}>
        <HeaderSection style={styles.headerSection}></HeaderSection>
        <View style={styles.headerTabs}>
          <View style={styles.homeTab}>
            <Text style={styles.homeText}>Home</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Popular")}
            style={styles.button}
          >
            <Text style={styles.popularText}>Popular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutOptions}>
          <View style={styles.bestPostIconRow}>
            <MaterialCommunityIconsIcon
              name="rocket"
              style={styles.bestPostIcon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.bestPosts}>BEST POSTS</Text>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={styles.dropdownIcon}
            ></IoniconsIcon>
            <MaterialIconsIcon
              name="view-agenda"
              style={styles.layoutIcon}
            ></MaterialIconsIcon>
          </View>
          <Divider style={styles.divider}></Divider>
        </View>
      </View>
      <View style={styles.postSection}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.postSection_contentContainerStyle}
        >
          <PostComponent
            Subreddit="r/Popular"
            PostDetails="Posted by u/hey • 10 hours ago"
            ContentText="What is an odd behaviour of yours you think only you do?"
            UpvotesText="873"
            CommentText="91"
            style={styles.postComponent}
          ></PostComponent>
          <PostComponent
            ContentText="Mayank Agarwal has scored his maiden double century - which is also his first century - in his 5th test match and the first match in India"
            Subreddit="r/Cricket"
            UpvotesText="873"
            CommentText="91"
            PostDetails="Posted by u/hey • 5 hours ago"
            text5=""
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
          <PostComponent
            ContentText="Betty Marion white was born in 1922; the first BMW car was made in 1928. Betty White is the original BMW"
            Subreddit="r/ShowerThoughts"
            UpvotesText="34.3k"
            CommentText="280"
            PostDetails="Posted by u/dinger • 10 hours ago"
            style={styles.postComponent5}
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
  headerSection: {
    height: 60
  },
  headerTabs: {
    height: 48,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6
  },
  homeTab: {
    width: 124,
    height: 48,
    borderColor: "#026bbd",
    borderWidth: 0,
    borderBottomWidth: 3,
    justifyContent: "center"
  },
  homeText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    alignSelf: "center"
  },
  button: {
    width: 142,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  popularText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    alignSelf: "center"
  },
  layoutOptions: {
    height: 48,
    marginTop: 1
  },
  bestPostIcon: {
    color: "grey",
    fontSize: 20
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
    marginLeft: 21
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
    marginTop: 12,
    marginLeft: 15,
    marginRight: 32
  },
  divider: {
    width: 360,
    height: 1,
    marginTop: 12
  },
  headerSectionColumn: {
    marginTop: 22
  },
  postSection: {
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1
  },
  postSection_contentContainerStyle: {
    height: 600,
    justifyContent: "flex-start"
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
  postComponent5: {
    height: 120,
    alignSelf: "stretch"
  },
  footer: {
    height: 50
  }
});

export default Home;
