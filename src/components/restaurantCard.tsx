import type { FC } from "react";
import React from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import type { FoodModel, Restaurant } from "../redux";

const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: 230,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
  },
  img: {
    width: width - 20,
    height: 220,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
  },
});

interface RestaurantProps {
  item: Restaurant | FoodModel;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onPress: Function;
}

const RestaurantCard: FC<RestaurantProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image style={styles.img} source={{ uri: `${item.images[0]}` }} />
    </TouchableOpacity>
  );
};

export default RestaurantCard;
