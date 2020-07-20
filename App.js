import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Explore from "./src/screens/Explore";
import Home from "./src/screens/Home";
import Notifications from "./src/screens/Notifications";
import Popular from "./src/screens/Popular";
import Post from "./src/screens/Post";

const DrawerNavigation = createDrawerNavigator({
  Explore: Explore,
  Home: Home,
  Notifications: Notifications,
  Popular: Popular,
  Post: Post
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Explore: Explore,
    Home: Home,
    Notifications: Notifications,
    Popular: Popular,
    Post: Post
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "ibm-plex-sans-regular": require("./src/assets/fonts/ibm-plex-sans-regular.ttf"),
      "ibm-plex-sans-500": require("./src/assets/fonts/ibm-plex-sans-500.ttf"),
      "ibm-plex-sans-700": require("./src/assets/fonts/ibm-plex-sans-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
