import type { FC } from "react";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import type { Category } from "../redux";

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 140,
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: "#EAEAEA",
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    color: "#858585",
  },
});

interface CategoryProps {
  item: Category;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onPress: Function;
}
const CategoryCard: FC<CategoryProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image source={{ uri: `${item.icon}` }} style={styles.img} />
      <Text style={styles.label}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
