import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { store } from "./src/redux";
import { HomeScreen } from "./src/screens/HomeScreen";
import { LandingScreen } from "./src/screens/LandingScreen";
import type { Routes } from "./src/components/Navigation";

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});

const Stack = createNativeStackNavigator<Routes>();

const HomeTab = createBottomTabNavigator();

function Home() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const icon =
              focused === true
                ? require("./assets/images/home_icon.png")
                : require("./assets/images/home_n_icon.png");
            return <Image style={styles.tabIcon} source={icon} />;
          },
        }}
      />
      <HomeTab.Screen
        name={"Offer"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const icon =
              focused === true
                ? require("./assets/images/offer_icon.png")
                : require("./assets/images/offer_n_icon.png");
            return <Image style={styles.tabIcon} source={icon} />;
          },
        }}
      />
      <HomeTab.Screen
        name={"Cart"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const icon =
              focused === true
                ? require("./assets/images/cart_icon.png")
                : require("./assets/images/cart_n_icon.png");
            return <Image style={styles.tabIcon} source={icon} />;
          },
        }}
      />
      <HomeTab.Screen
        name={"Account"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const icon =
              focused === true
                ? require("./assets/images/account_icon.png")
                : require("./assets/images/account_n_icon.png");
            return <Image style={styles.tabIcon} source={icon} />;
          },
        }}
      />
    </HomeTab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"Landing"} component={LandingScreen} />
          <Stack.Screen name={"Home"} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";
// import * as Location from "expo-location";

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = "Waiting...";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>{text}</Text>
//     </View>
//   );
// }
