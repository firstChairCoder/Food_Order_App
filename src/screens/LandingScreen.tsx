/* eslint-disable @typescript-eslint/no-shadow */
import type { FC } from "react";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Location from "expo-location";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import type { ApplicationState, UserState } from "../redux";
import { onUpdateLocation } from "../redux";
// import type {
//   Routes,
//   NativeStackNavigationProps,
// } from "../components/Navigation";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  nav: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  delivery: {
    width: 120,
    height: 120,
  },
  addressWrapper: {
    width: width - 100,
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 0.5,
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#707070",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#474747",
    textAlign: "center",
  },
  footer: {
    flex: 1,
  },
});

// type Props = NativeStackNavigationProps<Routes, "Landing">;

interface LandingProps {
  userReducer: UserState;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onUpdateLocation: Function;
  //   // navigation: NativeStackNavigationProps<Routes, "Landing">;
}

const _LandingScreen: FC<LandingProps> = (props) => {
  const navigation = useNavigation();

  const { onUpdateLocation, userReducer } = props;

  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.LocationGeocodedLocation>();
  const [displayAddress, setDisplayAddress] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location is not granted");
        return;
      }

      const location: any = await Location.getCurrentPositionAsync({});
      // console.log(location);

      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;

        const addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        // console.log(addressResponse);

        for (const item of addressResponse) {
          setAddress(item);
          onUpdateLocation(item);
          const currentAddress = `${item.region}, ${item.city}, ${item.country}`;
          setDisplayAddress(currentAddress);

          if (currentAddress.length > 0) {
            setTimeout(() => {
              navigation.navigate("Home");
            }, 2000);
          }
          return;
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nav} />

      <View style={styles.body}>
        <Image
          style={styles.delivery}
          source={require("../../assets/images/delivery_icon.png")}
        />
        <View style={styles.addressWrapper}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>

        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
});

const LandingScreen = connect(mapStateToProps, { onUpdateLocation })(
  _LandingScreen
);

export { LandingScreen };
