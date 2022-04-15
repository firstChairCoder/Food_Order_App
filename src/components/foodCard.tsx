/* eslint-disable @typescript-eslint/ban-types */
import type { FC } from "react";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import type { FoodModel } from "../redux";

import AddRemoveBtn from "./addRemoveBtn";

// import AddRemoveBtn from "./addRemoveBtn";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
    height: 100,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    flexDirection: "row",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
  },
  innerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#7C7C7C",
  },
  rightWrapper: {
    flex: 5,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  //   navigation: { flex: 2, backgroundColor: "red" },
  //   body: {
  //     flex: 10,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "yellow",
  //   },
  //   footer: { flex: 1, backgroundColor: "cyan" },
});

interface FoodCardProps {
  item: FoodModel;
  onPress: Function;
  //   onUpdateCart: Function;
}

const FoodCard: FC<FoodCardProps> = ({ item, onPress }) => {
  //   const didUpdateCart = (unit: number) => {
  //     item.unit = unit;
  //     onUpdateCart(item);
  //   };

  return (
    <View style={styles.container}>
      <Image source={{ uri: `${item.images[0]}` }} style={styles.img} />
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.innerWrapper}
      >
        <View style={{ flex: 7, padding: 10 }}>
          <Text>{item.name}</Text>
          <Text>{item.category}</Text>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.price}>$ {item.price}</Text>
          <AddRemoveBtn
            onAdd={() => {}}
            // onAdd={() => {
            //   const unit = isNaN(item.unit) ? 0 : item.unit;
            //   didUpdateCart(unit + 1);
            // }}
            // onRemove={() => {
            //   const unit = isNaN(item.unit) ? 0 : item.unit;
            //   didUpdateCart(unit > 0 ? unit - 1 : unit);
            // }}
            // qty={item.unit}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodCard;
