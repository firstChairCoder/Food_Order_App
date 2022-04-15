/* eslint-disable @typescript-eslint/ban-types */
import { useNavigation } from "@react-navigation/native";
import type { FC } from "react";
import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { FoodCard, IconBtn } from "../components";
import type { FoodModel } from "../redux";

// import type { Restaurant } from "../redux";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  body: {
    flex: 11,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  navigation: {
    flex: 1,
    marginTop: 43,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

interface RestaurantProps {
  navigation: { goBack: Function };
  route: { params: any };
}

export const RestaurantScreen: FC<RestaurantProps> = ({ route }) => {
  const navigation = useNavigation();
  // const { getParam, goBack } = props.navigation;
  const { restaurant } = route.params;
  // const restaurant = navigation.getParam("restaurant") as Restaurant;

  // console.log(restaurant);

  const onPressFood = (item: FoodModel) => {
    navigation.navigate("FoodDetails", { food: item });
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <IconBtn
          icon={require("../../assets/images/back_arrow.png")}
          onPress={() => navigation.goBack()}
          width={42}
          height={42}
        />
        <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 80 }}>
          {restaurant.name}
        </Text>
      </View>

      <View style={styles.body}>
        <ImageBackground
          source={{ uri: `${restaurant.images[0]}` }}
          style={{
            width,
            height: 300,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              height: 120,
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: 10,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 40, fontWeight: "700" }}>
              {restaurant.name}
            </Text>
            <Text style={{ color: "#FFF", fontSize: 25, fontWeight: "500" }}>
              {restaurant.address} {"   "} {restaurant.phone}
            </Text>
          </View>
        </ImageBackground>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurant.foods}
          keyExtractor={(item) => `${item._id}`}
          renderItem={({ item }) => (
            <FoodCard
              item={item}
              onPress={onPressFood}
              // onUpdateCart={props.onUpdateCart}
            />
          )}
        />
      </View>
    </View>
  );
};
